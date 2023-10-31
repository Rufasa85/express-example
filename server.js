const express = require("express");
const path =require("path");

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

const petsRoutes = require("./controllers/petsController");
app.use("/api/pets",petsRoutes)

const ownersRoutes = require("./controllers/ownersController");
app.use("/api/owners",ownersRoutes)

app.listen(PORT,()=>{
    console.log(`listenin to the smooth sounds of port ${PORT}`)
});

