var http = require("http");
var fs = require("fs");
var querystring = require('querystring');
// server.listen(3000, function() {
//   console.log("Server is listening on port 3000. Ready to accept requests!")
// });

var message = "I am so happy to be part of Node Boys workshop";

function handler(request, response) {
  let endpoint = request.url;

  if (endpoint === "/") {
    fs.readFile(__dirname + "/../public/index.html", function(error, file) {
      if (error) {
        response.writeHead(500);
        response.end("500");
      } else {
        response.writeHead(200, {
          "Content-Type": "text/html"
        });
        response.end(file);
      }
    });
  } else if (endpoint === "/main.css") {
    fs.readFile(__dirname + "/../public/main.css", (error, file) => {
      if (error) {
        response.writeHead(500);
        response.end("500");
      } else {
        response.writeHead(200, {
          "Content-Type": "text/css"
        });
        response.end(file);
      }
    });
  } else if (endpoint === "/img/image.jpg") {
    fs.readFile(__dirname + "/../public/img/image.jpg", (error, file) => {
      if (error) {
        response.writeHead(500);
        response.end("500");
      } else {
        response.writeHead(200, {
          "Content-Type": "image/jpeg"
        });
        response.end(file);
      }
    });
  } else if (endpoint === "/create-post") {
    var allTheData = '';
    request.on('data', function(chunkOfData) {
      allTheData += chunkOfData;
    });
    request.on('end', function() {
      var convertedData = querystring.parse(allTheData);
      console.log(convertedData);
      response.end();
    });
    response.writeHead(302, {"Location": "/"});
  } else {
    response.writeHead(404);
    response.end("404");
  }
}

var server = http.createServer(handler);

server.listen(3006, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
