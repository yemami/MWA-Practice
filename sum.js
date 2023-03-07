function sum(a,b,...args){
    let num = a+b;

    for(let n of args){
        num+=n;
    }
    return num;
}

let result = sum(4,5,6,7,8,6,78,9,0,)
console.log(result)