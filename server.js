const express = require("express");
const path =require("path");
const fs = require('fs');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"));
})

app.get("/joe",(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/joe.html"));
})

app.get('/api/pets/',(req,res)=>{
    const pets = JSON.parse(fs.readFileSync("./db/pets.json"))
    console.log(`${req.method} request to ${req.url}`)
    res.json(pets);
})

app.post("/api/pets/",(req,res)=>{
    const newPet = {
        id:crypto.randomUUID(),
        name:req.body.name,
        species:req.body.species,
        breed:req.body.breed,
        color:req.body.color
    }
    const storedPetsData = JSON.parse(fs.readFileSync("./db/pets.json"));
    storedPetsData.push(newPet)
    fs.writeFileSync("./db/pets.json",JSON.stringify(storedPetsData,null,4));
    console.log(`${req.method} request to ${req.url}`)
    res.json(newPet)
})

app.get("/api/pets/:petId",(req,res)=>{
    const pets = JSON.parse(fs.readFileSync("./db/pets.json"))
    const id = req.params.petId;
    for (let i = 0; i < pets.length; i++) {
        if(pets[i].id==id){
            return res.json(pets[i])
        } 
    }
    return res.send("sorry, no such pet")
})

app.listen(PORT,()=>{
    console.log(`listenin to the smooth sounds of port ${PORT}`)
});