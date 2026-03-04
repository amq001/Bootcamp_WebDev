// Problem Description – Async Cache with Time-to-Live (TTL)

// You are required to create an asynchronous cache utility that exposes a get(key, fetcher) method. 
// If the requested key already exists in the cache, the cached value should be returned immediately. 
// If the key does not exist, the fetcher function should be executed to retrieve the value, 
// store it in the cache, and automatically remove the entry after a fixed Time-to-Live (TTL) of 5 seconds.
class AsyncCache {
  constructor(ttl = 5000) {
    this.ttl = ttl;
    this.cache = new Map();
    this.pending = new Map();
  }

  async get(key, fetcher) {
    if(this.cache.has(key)){
      return this.cache.get(key).value
    }
    if (this.pending.has(key)) {
      return this.pending.get(key)
    }

    const fetchPromise = (async()=>{
      try {
        const value = await fetcher()
        const Timeout = setTimeout(()=>{
          this.cache.delete(key)
        },this.ttl)
        this.cache.set(key,{value,Timeout})
        return value
      } finally {
        this.pending.delete(key)
      }
    })()

    this.pending.set(key,fetchPromise)
    return fetchPromise;
  }
}

module.exports = AsyncCache;
