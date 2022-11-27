const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get('',(req,res)=>{
    res.sendFile(__dirname+'/calc.html')
})

app.post('/',(req,res)=>{
    const n1 = Number(req.body.Fnum)
    const n2 = Number(req.body.Snum)
    if(req.body.add)
    {
        const add = n1+n2;
        res.send("the value is "+add);
    }
    else if(req.body.sub)
    {
        const Sub = n1-n2;
        res.send("the value is "+Sub);
    }

    else if(req.body.div)
    {
        const Div = n1/n2;
        res.send("the value is "+Div);
    }

    else if(req.body.mul){
        const Mul = n1*n2;
        res.send("the value is "+Mul);
    }
    else{
        res.send("click to calculate")
    }

})
app.listen(3000,(res)=>{
    console.log("server started on port 3000");
});