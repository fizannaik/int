var fs = require('fs');
var stream = fs.createWriteStream("my_file.txt");
stream.once('open', function(fd) {
  stream.write("Fizan Naik\n");
  stream.write("11905580\n");
  stream.end();
});