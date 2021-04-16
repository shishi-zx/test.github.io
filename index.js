var express = require("express")
var path = require("path")
var app = express()
app.engine('html',require('express-art-template'))
app.use('/public/',express.static(path.join(__dirname,'./public')))
app.get("/",function(req,res){
    res.render("3d立方体.html")
})
app.listen(8000,function(){
    console.log("running")
})