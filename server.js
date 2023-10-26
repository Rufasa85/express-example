const express = require("express");

const PORT = 3000;

const app = express();

const pets=[
    {
        id:4,
        name:"Puppy",
        speices:"Dog",
        breed:"Great Dane",
        color:"harlequin"
    },
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
        breed:"Golden Retriever",
        color:"Golden"
    },
    
]

app.get("/",(req,res)=>{
    res.send("I think dogs are pretty cool")
})

app.get("/joe",(req,res)=>{
    res.send("this is joes page!")
})

app.get('/pets/',(req,res)=>{
    res.json(pets);
})

app.get("/pets/:petId",(req,res)=>{
    const id = req.params.petId;
    for (let i = 0; i < pets.length; i++) {
        if(pets[i].id==id){
            return res.json(pets[i])
        } 
    }
    return res.send("sorry, no such pet")
})

app.listen(3000,()=>{
    console.log(`listenin to the smooth sounds of port ${PORT}`)
});