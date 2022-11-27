const prompt = require('prompt-sync')();
const fs = require('fs');
var http = require('http');

var student = new Object();
student.name = prompt("enter name: ");
student.age = Number(prompt('enter age: '));

let data = JSON.stringify(student, null,2);
fs.writeFile('student.json', data, (err)=>{
  if(err) throw err;
  console.log('Done');
});
var server = http.createServer(function(req,res){
  fs.readFile('student.json', (err,data)=>{
    if(err) throw err;
    let stud = JSON.parse(data);
    res.write(JSON.stringify(stud,null,1));
    res.end();
  });
});