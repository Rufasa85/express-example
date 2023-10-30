const express = require("express");
const path =require("path");

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const pets=require("./db/pets.json")


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"));
})

app.get("/joe",(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/joe.html"));
})

app.get('/api/pets/',(req,res)=>{
    console.log(`${req.method} request to ${req.url}`)
    res.json(pets);
})

app.post("/api/pets/",(req,res)=>{
    console.log(req.body);
    pets.push(req.body);
    console.log(`${req.method} request to ${req.url}`)
    res.send("new pet created!")
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

app.listen(PORT,()=>{
    console.log(`listenin to the smooth sounds of port ${PORT}`)
});