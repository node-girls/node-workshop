var http = require("http");
var myHandler = require("./handler");


var message = "I am so happy to be part of Node Boys workshop";

var server = http.createServer(myHandler);

server.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
