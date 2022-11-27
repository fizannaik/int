const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<html>
  <style>input[type=text]:focus {
      border: 3px solid #555;
        background-color: #0da2d4;
    }</style>
<SCRIPT>function display()
  {
  var x=document.details.fname.value;
  var y=document.details.lname.value;
  var z=document.details.phnum.value;
  alert("Thank you for your feedback "+x);
  }
  const btn = document.getElementById('btn');

</SCRIPT>
<body>
<form name=details>
<table>
<tr><td>ENTER NAME:<input type=text  name=fname></td></tr>
</br>
<tr><td>ENTER PHONE NUM:<input type="tel" name=lname></td></tr>
</br>
<tr><td>ENTER your feedback :<input type=textarea  name=phnum></td></tr>
</table>
<input id="btn" type="button" value="Click Me" onclick="display() ;">
</form>
</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});