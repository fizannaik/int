var fs = require('fs');

var fileToRead = "cc1.txt";

fs.readFile(fileToRead, 'utf8' , (err, data) => {
  if(err) {
    console.log(err.message);
} else {
    console.log(data);
}
});