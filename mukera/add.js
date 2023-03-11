// const mukera = require("crypto")
// mukera();
const express = require('express');// import express
const app = express();

app.use("static", express.static("public") //configuration
app.use(express.json()); //middleware
app.use("/book", express.json()); //middleware
app.use(express.json()); //middleware
app.use(express.json()); //middleware
app.use(express.json()); //middleware
app.use(express.json()); //middleware
app.use(express.json()); //middleware
const data = []
app.get("/books",express.json(), (req,res)=>{
    // send all books 
    res.json(data)
})
app.post("/books",express.json(), (req,res)=>{
    // add new book req.body
    data.push(req.body)
    res.json(data)
})
app.get("/books/:book_id",(req,res)=>{
    // send one book by id?? req.params.book_id

    res.json(data.filter(book=> book.id === req.params.book_id)[0])//  [{id:3}]=>  {id:3}
})
app.put("/books/:book_id",express.json(), (req,res)=>{
    // update/replace book by id = req.params.book_id
    // updated book = req.body
    res.json(data.map(book=> {
        if(book.id === req.params.book_id){
            return req.body
        }else{
            return book
//         }
//     }))//  [{id:3}]=>  {id:3}

// })

// app.patch("/books/:book_id",express.json(), (req,res)=>{
//     // update/replace book by id = req.params.book_id
//     // updated book = req.body // {price: 60}
//     res.json(data.map(book=> { // {id:1, name: 'hello', price: 55}
//         if(book.id === req.params.book_id){
//             return {...book,price: req.body.price } // {id:1, name: 'hello', price: 55, price: 60}
//         }else{
//             return book
//         }
//     }))//  [{id:3}]=>  {id:3}

// })
// app.delete("/books/:book_id",(req,res)=>{
//     // delete book by id: req.params.book_id
//     res.json(data.filter(book=> book.id !== req.params.book_id))//  [{id:3}]=>  {id:3} what to Keep

// })

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
});

// result = [1,2,3,4,2].map((num, index)=>{
//     // console.log(num, index)
//     if(num===2) return num*10;
//     else return num
// })
// console.log(result)

// result = [1,2,3,4,2].filter((num, index)=>{
//     // console.log(num, index)
//     if(num!==2) return true // keep
//     else return false // remove
// })
// console.log(result)

// // Array.filter()
// // Array.map()
// // JS destructuring

// obj = {n: 1, y:2}

// n = obj.n
// y = obj.y
// const {n, y } = {n: 1, y:2};
// // spread operator
// arr = [1,3,4]

// arr2 = [arr] // [[1,3,4]]
// arr3 = [...arr] // [1,3,4]

