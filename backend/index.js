const express=require("express")
const cors = require ("cors")
const app=express()

app.use(cors())
var username="swetha"
var password=123
 
app.get("/login", function(req,res){

    if(req.query.username == username && req.query.password == password){
        res.send("Login Successfull")
    }
    else{
        res.send("Login Failed")
    }
})
app.listen(3000,function(){
    console.log("Server Started...")
})