// Problem Description – Non-Blocking Large Array Processing

// You are given a very large array containing around 100,000 items that must be processed. 
// Your task is to implement a strategy that performs this processing without blocking the main thread, ensuring the browser UI remains responsive. 
// The solution should break the work into smaller chunks and schedule them asynchronously.
async function processLargeArray(items, processFn) {
    let chunkSize = 1000;
    let index = 0

    while(index<items.length){
        const end = Math.min(index+chunkSize,items.length)
        for (let i = index; i < end; i++) {
            try {
                processFn(items[i])
            } catch (error) {
                throw new Error(error)
            }
        }
        index = end
        if (index < items.length) {
          await new Promise((resolve) => setTimeout(resolve, 0));
        }
    }

}

module.exports = processLargeArray;
