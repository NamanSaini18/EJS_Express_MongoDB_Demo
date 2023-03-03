const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Movie = require("./models/Movie")



mongoose.connect("mongodb://127.0.0.1:27017/movies")
.then(()=> console.log("DB CONNECTED!!"))
.catch((err) => console.error(err));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname, "public", "js"))); // MiddleWare




app.get("/search", async(req,res) => {
    
    const { q } = req.query;
    const movies =  await Movie.find({ name : { $regex : `^${q}`}});

    console.log(movies);

    res.status(200).json(movies);

    // res.send("You are on the search route")
})


app.get("/",(req,res)=>{
    res.render("index");
})



app.listen(5000,()=>{
    console.log("Server listening at Port 5000")
})