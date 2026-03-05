// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
    let called = false;
    let result;
    let error;
    let waiting = [];
    
    return function(...args) {
        const callback = args.pop();
        if (called) {
            callback(error, result);
            return;
        }
        waiting.push(callback);
        if (!called) {
            called = true;
            fn(...args, (err, res) => {
                error = err;
                result = res;
                waiting.forEach(cb => cb(err, res));
                waiting = [];
            });
        }
    }
}

module.exports = once;
