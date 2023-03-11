function fn(callback) {
    setTimeout(() => {
    console.log('result of fn()');
    callback();
    }, 1000 ); // 1 second delay
    }
    fn(()=> console.log('fn() is done!'));