const express = require("express");
const app = express();

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("./public"));

app.get("/", (req,res) =>{
    res.render("index.ejs", {
    });
});

app.listen(process.env.PORT, ()=>{
    console.log(`Listening...`);
});