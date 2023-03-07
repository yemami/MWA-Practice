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

let names= characteristics.map(cahracter=>{//map character array in new name array .... map is used to transform from one to anothr 
    return cahracter.name
})

const qualifications = characteristics.map(quali=>quali.qualification)//map to qualification

let nameAndQualifications = characteristics.map((a) =>({//change the above caracterstics array to name and qualification by using map
    name:a.name, 
    qualification:a.qualification,
}));

let ageAndSex = characteristics.map(result=>({
    age:result.age,
    sex:result.sex,
    name:result.name
}))

result = [1,2,3,4,2].map((num)=>{
         //console.log(num, index)
        if(num===2) return num*10;
        else return num
    })
    console.log(result)

console.log(ageAndSex)
console.log(nameAndQualifications)
console.log(qualifications)
console.log(names)