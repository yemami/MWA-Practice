async function myFunction() {
    try{
    const result = await new Promise((resolve,reject) => reject(false));
   console.log(result);
    }catch(error){
    console.log(error);
    }
    }
    myFunction();
    console.log(`Finish`);