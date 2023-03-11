const promise = new Promise((resolve, reject) => {
    console.log(`Promise starts`)//1
    resolve(`Promise result`)//5
    console.log(`Promise ends`)//2
    })
    console.log(`Code starts`)//3
    promise.then(console.log)
    console.log(`Code ends`)//4