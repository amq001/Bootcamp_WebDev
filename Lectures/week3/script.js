const fs = require("fs");

// Error first callback (first parameter is err always)
// function readFileCallback(err,contents){
//     console.log(contents)
// }

// Sync
// const content = fs.readFileSync("a.txt","utf-8")

// Async
// const content = fs.readFile("a.txt","utf-8", readFileCallback )


let ctr = 0;

function callback(){
   console.log(ctr)
   ctr++
}

// setInterval(callback,1000)

for (let i = 0; i <= 2000000000; i++) {
    if (i==2000000000) {
        console.log("10000000000000000")
    }
}
setTimeout(callback,1000)
setTimeout(callback,1000)
setTimeout(callback,1000)

for (let i = 0; i <= 2000000000; i++) {
    if (i==2000000000) {
        console.log("10000000000000000")
    }
}