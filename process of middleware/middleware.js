const mod = (req,res,next)=>{
    const numb= Number(req.body.mo);
    req.body.mo = numb%10;
    next()
}

module.exports = {mod};