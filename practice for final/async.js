async function myFunction() {
    setTimeout(() => {
    console.log('result of fn()');//6
    }, 1000 ); // 1 second delay
    console.log(`Start`);//2
    const result = await new Promise(resolve => resolve(true));// await is used to wait for the promise to resolve can not 
    //excute below code until the promise is resolved

    console.log(result);//4
    console.log(`End`);//5
    }
    console.log(`hello`);//1
    myFunction();
    console.log(`Finish`);//3