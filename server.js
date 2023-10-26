const express = require("express");

const app = express();

const pets=[
    {
        id:1,
        name:"Shiva",
        species:"Cat",
        color:"Tortie"
    },
    {
        id:2,
        name:"Bahamut",
        species:"Cat",
        color:"Buff Tabby"
    }, 
    {
        id:3,
        name:"Winston",
        species:"Dog",
        color:"Golden"
    },
    
]

app.get("/",(req,res)=>{
    res.send("I think dogs are pretty cool")
})

app.get("/joe",(req,res)=>{
    res.send("this is joes page!")
})

app.get('/pets',(req,res)=>{
    res.json(pets);
})

app.listen(3000);