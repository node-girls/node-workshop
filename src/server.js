const http = require('http');
const fs = require('fs');
const path = require('path');

const handler = (req, res) =>{
  var endpoint = req.url;
  console.log(endpoint);
  var method = req.method;
  if(endpoint === '/'){
    res.writeHead(200, {'Content-Type':'text/html'});
    var filePath = path.join(__dirname, '..', '/public/index.html');
    fs.readFile(filePath, (err, file) => {
      if(err){
        console.log(err);
        return;
      }
      res.end(file);
    })
  }
  else if (endpoint === "/img/image.jpg") {
    res.writeHead(200, {'Content-Type': 'image/jpg'})
    var filePath = path.join(__dirname, '..', 'public', endpoint);
    fs.readFile(filePath, (err, file) => {
      if (err) {
        console.log(err);
        return;
      }
      res.end(file);
    })
  }
  else if (endpoint === "/main.css") {
    res.writeHead(200, {'Content-Type': 'text/css'})
    var filePath = path.join(__dirname, '..', 'public', endpoint);
    fs.readFile(filePath, (err, file) => {
      if (err) {
        console.log(err);
        return;
      }
      res.end(file);
    })
  }
  // if(endpoint === '/node'){
  //   res.writeHead(200,{'Content-Type':'text/html'});
  //   res.write('node');
  //   res.end();
  // }
  // else if (endpoint === '/girls'){
  //   res.writeHead(200,{'Content-Type':'text/html'});
  //   res.write('girls');
  //   res.end();
  // }
else{
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write(message);
  res.end();
}

}
var server = http.createServer(handler);

var port = 3000;

const message = 'hello world';


server.listen(port, function(){
  console.log(`Server is listing on port: ${port}`)
})
