var http = require('http');
var router = require('./src/router');

var server = http.createServer(router);

server.listen(3000, function(request, response) {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
