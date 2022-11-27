const bodyParser=require('body-parser');
const express=require('express');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('',(req,res)=>{
    res.sendFile(__dirname+'/pract.html')
})

app.post('/',(req,res)=>{
    const n1=Number(req.body.Fnum)
    const n2=Number(req.body.Snum)
    if(req.body.add){
        const add=n1+n2;
        res.send("sum is"+add);
    }
    if(req.body.sub){
        const Sub=n1-n2;
        res.send("sub is"+Sub);
    }
    if(req.body.mul){
        const Mul=n1*n2;
        res.send(Mul);
    }
    if(req.body.div){
        const Div=n1/n2;
        res.send(Div);
    }
    else
{
    res.send("click to calculate");
}
})
app.listen(3000,(res)=>{
    console.log("listening")
})