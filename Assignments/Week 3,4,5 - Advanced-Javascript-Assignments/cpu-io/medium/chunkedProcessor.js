// Problem Description – Smart Progress Bar (CPU Yielding)
//
// You need to process a large list of items without blocking
// the event loop.
//
// Process the items in small chunks and yield control back
// to the event loop after each chunk so the system stays responsive.
//
// Requirements:
// - Implement chunkedProcessor(items, processFn, onComplete).
// - Process items in fixed-size chunks.
// - Yield using setImmediate after each chunk.
// - Call onComplete after all items are processed.
function chunkedProcessor(items, processFn, onComplete) {
    let index = 0
    function next(){
    if (index>=items.length) {
        return onComplete()        
    }
    
        processFn(items[index])
        index++

        setImmediate(next)
    }
    next()
}

module.exports = chunkedProcessor;
