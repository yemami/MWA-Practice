// console.log('a')
// setImmediate(()=>console.log('setImmidate'))
// setTimeout(()=>console.log('setTimeout'),10);
// console.log('b')


const test = async function myFunction() {
    try{
    const result = await new Promise((resolve,reject) => reject(false));
    console.log(result);
    }catch(error){ 
    console.log(error); 
    } 
    }
    myFunction();
    console.log(`Finish`);

// console.log(`Start`);
// async function myFunction() {
// console.log(`A`)
// const result = await myPromiseTask()
// console.log(result)
// }
// myFunction()
// console.log(`End`);
// function myPromiseTask() {
// return new Promise(resolve => {
// console.log(`C`)
// resolve(`Task Results`)
// console.log(`D`)
// })
// }
// x=5;//global variable means you can access any ware in this workspace



(() => new Promise((resolve) => resolve('promise')))()
.then((p) => console.log(p))
setTimeout(() => console.log('timeout'), 0);
setImmediate(() => console.log('immediate'));
queueMicrotask(() => console.log('microtask'));
process.nextTick(() => console.log('nexttick'));

module.exports = test;