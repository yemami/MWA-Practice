console.log(`Start`);
async function myFunction() {
console.log(`A`)
const result = await myPromiseTask()
console.log(result)
}
myFunction()
console.log(`End`);
function myPromiseTask() {
return new Promise(resolve => {
console.log(`C`)
resolve(`Task Results`)
console.log(`D`)
})
}