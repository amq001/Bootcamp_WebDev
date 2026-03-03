const fs = require('fs')

// function callback(err,data){
//     if (err) {
//         console.log("Error while reading a file")
//     } else {
//         console.log(data)
//     }
// }

// fs.readFile("a.txt","utf-8",callback)

function callback(data){
        console.log(data)
}


function callbackErr(err){
        console.log("Error while reading a file")
}

function fsReadFilePromisefied(filepath,encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,encoding,()=>{
            if (err) {
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

fsReadFilePromisefied("a.txt","utf-8")
.then(callback)
.catch(callbackErr)