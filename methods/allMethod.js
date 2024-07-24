const express = require('express')
const app = express()

app.use(express.json())

app.listen(3000,"localhost",()=>{
    console.log("Server listen at 3000");
})

let users=[
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" },
    { "id": 3, "name": "Charlie" },
    { "id": 4, "name": "David" },
    { "id": 5, "name": "Eva" },
    { "id": 6, "name": "Frank" },
    { "id": 7, "name": "Grace" },
    { "id": 8, "name": "Hannah" },
    { "id": 9, "name": "Isaac" },
    { "id": 10, "name": "Judy" }
]


app.get('/',(req,res)=>{
    res.send(users)
})

app.post('/users',(req,res)=>{
    users = req.body;
    res.json({
        message : "User data received successfully",
        user : res.body
    })
})


// user of params
app.get('/user/:id',(req,res)=>{
    res.send(req.params)
    console.log(req.params);
})



//use of queries

app.get('/user',(req,res)=>{
    res.send(req.query)
    console.log(req.query);
})
