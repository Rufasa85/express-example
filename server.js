const express = require("express");
const path =require("path");

const PORT = 3000;

const app = express();

app.use(express.static("public"))

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
    {
        id:5,
        name:"Gefilte",
        species:"Fish",
        breed:"Betta",
        color:"Blue and Purple"
    },
    
]


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"));
})

app.get("/joe",(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/joe.html"));
})


app.get('/api/pets/',(req,res)=>{
    res.json(pets);
})

app.get("/api/pets/:petId",(req,res)=>{
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