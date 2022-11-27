const fs = require('fs');

// File destination.txt will be created or overwritten by default.
fs.copyFile('myFile.txt', 'copyFile.txt', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});


try {
  fs.unlinkSync('myFile.txt');

  console.log("Delete File successfully.");
} catch (error) {
  console.log(error);
}