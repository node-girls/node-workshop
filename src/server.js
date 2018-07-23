var http = require("http");
var fs = require("fs");
var router=require("./router.js");
var port=5000;

var server = http.createServer(router);

server.listen(port, function() {
  console.log("server is ready to go !!!!!!!! :)");
});
