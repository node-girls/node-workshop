const http = require('http');
const handler = (req, res) =>{
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write(message);
  res.end();
}
var server = http.createServer(handler);

var port = 3000;

const message = 'hello world';


server.listen(port, function(){
  console.log(`Server is listing on port: ${port}`)
})
