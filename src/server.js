var http = require("http");
var fs = require("fs");
var server = http.createServer(handler);

server.listen(5000, function() {
  //console.log("server is ready to go !!!!!!!! :)");
});

function handler(request, response) {
  var endPoint = request.url;
  var method = request.method;
  console.log(method);
  console.log(endPoint);
  if (endPoint === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(__dirname+'..'+'/public/index.html',function(error,file){
      if(error){
        console.log("errrrr");
        return;
      }
  response.end(file);

      }
    });
    response.write("hhh");
    response.end();
  } else if (endPoint === "/node") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("hellow node");
    response.end();
  } else if (endPoint === "/girls") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("hellloe girls");
    response.end();
  }
}
