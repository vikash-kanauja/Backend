const express = require('express')
const app = express()

app.use(express.json())

app.listen(3000,"localhost",()=>{
    console.log("Server listen at 3000");
})

let users={}

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