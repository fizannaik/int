//session
const express  = require('express');
const app = express();
const session = require('express-session')

app.use('express-session');
app.use(session({
    secret:'key',
    resave:false,
    saveUninitialized:false,
}));
var count = 0;
app.get('/',(req,res)=>{
 
    req.session.count+=1;
    res.send("You visited this site "+`${req.session.count}`+" times");
})

app.listen(3000,()=>{
    console.log("server running....");
})
