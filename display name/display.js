

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const fs = require('fs');

app.use(bodyParser.urlencoded({extended:true}))

app.get('',(req,res)=>{
    res.sendFile(__dirname+"/display.html");
})

app.post('',(req,res)=>{
    var name = req.body.nam;
    var rege = req.body.reg;
    var grade = req.body.grad;

    var records = "\n"+"Name: "+ name +" Reg: "+rege+" grade: "+grade;
    fs.appendFileSync('students.txt',records);

    res.redirect('/');

})


app.listen(3000,(req,res)=>{
    console.log("server running on port 3000");
})