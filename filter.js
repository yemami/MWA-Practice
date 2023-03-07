const characteristics = [
    {
        name: 'simegnew',
        age: '27',
        sex: 'M',
        eye_color: 'brown',
        qualification: 'fullStackJavaDeveloper'
    },
    {
        name: 'birhan',
        age: '36',
        sex: 'F',
        eye_color: 'brown',
        qualification: 'HouseHolder'

    },
    {
        name: 'Mother',
        age: '58',
        sex: 'F',
        eye_color: 'brown',
        qualification: 'BestOfMotherInTheWorld'

    },
    {
        name: 'Father',
        age: '61',
        sex: 'M',
        eye_color: 'brown',
        qualification: 'BestOfFatherInTheWorld'
    }
     
]

let result= characteristics.filter(name=>{
    return name.qualification !='BestOfFatherInTheWorld';
    
});
let resultOfAge = characteristics.filter(a =>
     a.age>28
   )

   let position = characteristics.map(a=>a.eye_color)

   let namee= characteristics.filter(a=> a.name==='simegnew')

   
results = [1,2,3,4,2].filter((num, index)=>{
    // console.log(num, index)
    if(num!==2) return true // keep
    else return false // remove
})
console.log(results)

console.log(namee)
console.log(result)
console.log(resultOfAge)