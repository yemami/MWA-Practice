const promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Promise results')}, 1000); // resolve after 1 second
    });
    console.log('Code starts');//1
    promise.then((result) => {
    console.log(result);//3
    })
    console.log('I love JS');//2