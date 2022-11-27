const file = require('fs');
// const data = file.readFileSync('./config.json');

//read
// console.log(data.toString());
//write//
var content = [,
    {"new_name":"Abhishek kumar"}
];

const msg = file.writeFilesync('./config.json',JSON.stringify(content,null,2),'utf8');
if(msg)
console.log("data update");
else
console.log(msg);