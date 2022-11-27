const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const {mod} = require('./middleware')

//middleware//
app.use(bodyParser.urlencoded({extended:true}));
let num=null
app.get('/',(req,res)=>{
    // res.sendFile(__dirname+'/index.html');
    res.send(`
    <form action="/" method="post">
    <input placeholder="Enter a number" type="number" name="mo">
<input type="submit" value="mod">
</form>
<h2>${num!= null ? num:''}</h2>
    `)
})
app.post('/',mod,(req,res)=>{
    num = req.body.mo
    return res.redirect('/')
})

app.listen(3000,(req,res)=>{
    console.log("server running:)");
})