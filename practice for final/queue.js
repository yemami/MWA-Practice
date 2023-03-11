setTimeout(() => console.log('setTimeout results'), 17);//4
const promise = new Promise((resolve) => resolve(`Promise results`));
setImmediate(()=>console.log('setImmediate results'));//5
console.log('Code starts');//1
promise.then(console.log);//3
console.log('I love JS');//2