// Problem Description – Yielding a CPU-Intensive Task
//
// You are given a CPU-heavy computation that runs inside a loop.
// Instead of blocking the event loop completely, your task is to
// periodically yield control back to the event loop.
//
// By using setTimeout inside an async function, the computation
// should pause every fixed number of iterations, allowing other
// asynchronous tasks (like timers or I/O callbacks) to run.

async function yieldedCPU(iterations) {
  let sum = 0;
  let chunkSize = 1000;

  for (let index = 1; index < iterations; index++) {
    sum += index;
    if (chunkSize % index == 0) {
        await new Promise((resolve)=>setTimeout(() => resolve(), 0))
    }
  }

  return sum;
}

module.exports = yieldedCPU;
