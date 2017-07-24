const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

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
  else if (endpoint === "/create-post") {
    var allTheData = '';
    req.on('data', (chunkOfData) => {
      allTheData += chunkOfData;
    })
    req.on('end', () => {
      var convertedData = querystring.parse(allTheData);
      console.log(convertedData);
      res.end();
    })
    res.writeHead(302, {'Location': '/'});
    res.end();
  }
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
