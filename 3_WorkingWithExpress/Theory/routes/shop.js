const express = require("express")
const route = express.Router();
const path = require("path")

route.get("/",(req,res,next)=>{
    // res.send("<h1> HOME </h1>")
    res.sendFile( path.join(__dirname,"../","views","shop.html"))
});

module.exports = route