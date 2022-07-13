const express = require("express");

const app = express()

app.use((req, res, next)=>{
    console.log(" MIDDLE 1")
    next()
})

app.use((req, res, next)=>{
    console.log(" MIDDLE 2")
    next()
})

app.use("/users",(req, res, next)=>{
    res.send("list of users")
})

app.use("/",(req, res, next)=>{
    res.send("HOME")
})

app.listen(3000,()=>{
    console.log("Server Runs");
})