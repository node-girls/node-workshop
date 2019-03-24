var http = require("http");
var fs = require("fs");

// server.listen(3000, function() {
//   console.log("Server is listening on port 3000. Ready to accept requests!")
// });

var message = "I am so happy to be part of Node Boys workshop";
function handler(request, response) {
  let endpoint = request.url;
  console.log(endpoint);
  let method = request.method;
  console.log(method);

  if (endpoint === "/") {
    fs.readFile(__dirname + "/../public/index.html", function(error, file) {
      if (error) {
        response.writeHead(500);
        response.end("500");
      } else {
        response.writeHead(200);
        response.end(file);
      }
    });
  } else {
    response.writeHead(404);
    response.end("404");
  }
}

var server = http.createServer(handler);

server.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
