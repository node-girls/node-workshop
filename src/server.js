const http = require('http');

const server = http.createServer();

server.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!")
});
