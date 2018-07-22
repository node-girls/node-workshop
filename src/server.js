var http = require('http');
var server=http.createServer(handler);

server.listen(5000,function(){
  //console.log("server is ready to go !!!!!!!! :)");
});

function handler(request,response){
  response.writeHead(200,{"Content-Type": "text/html"});
  response.write("hhh");
  response.end();
};
