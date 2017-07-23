const http = require('http');
const fs = require('fs');
const path = require('path');

const handler = (req, res) =>{
  var endpoint = req.url;
  console.log(endpoint);
  var method = req.method;
  console.log(method);
  if(endpoint === '/'){
    res.writeHead(200, {'Content-Type':'text/html'});
    console.log(__dirname+'/public/index.html');
    var fPath = path.join(__dirname, '..', '/public/index.html');
    fs.readFile(fPath, (err, file)=>{
      if(err){
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
