const http = require('http')
const hostname ='127.0.0.1';
const server=http.createServer((req,res)=>{
    res.setHeader('content','text/html')
    res.end(`<html>
    <body>
    <h1>hello</h1>
    </body></html>
    `)
})

server.listen(3000,hostname,()=>{
    console.log("running")

})