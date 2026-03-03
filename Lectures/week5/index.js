function blockEventLoop(ms) {
    let initialTime = Date.now()
    while (Date.now() - initialTime < ms) {
    }
    console.log(ms," hello !")
}

blockEventLoop(5000)