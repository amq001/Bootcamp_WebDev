function setTimeoutPromisefied(ms){
    return new Promise (resolve => setTimeout(resolve,ms))
}

function callback(){
    console.log(data)
}

// new way considered a bit better
setTimeoutPromisefied(3000).then(callback)

// same but old way
setTimeout(callback,3000)






