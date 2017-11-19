var http = require('http');
var fs = require('fs');
var querystring = require('querystring');

var message = "This is my own server";

function handler(request, response) {
  var endpoint = request.url;
  var method = request.method;
  console.log(endpoint, method);

  if (endpoint === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(__dirname + '/public/index.html', function(error, file) {
      if (error) {
        console.log(error);
        // response.write("Something went wrong...");
        // response.end();
        return;
      }
        response.end(file);
    });
  }
  else if (endpoint === '/node') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("This is the NODE endpoint.");
    response.end();
  }
  else if (endpoint === '/girls') {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("this is the GIRLS ONLY endpoint.");
    response.end();
  }
  else if (endpoint === '/create-post') {
    //Receiving data from client
    var allData = '';
    request.on('data', function(chunkOfData) {
      allData += chunkOfData;
    });

    request.on('end', function() {
      var convertedData = querystring.parse(allData);
      console.log(convertedData);
      response.writeHead(307, {'Location': '/index.html'});
      response.end();
    });
  }
  else {
    var extensions = endpoint.split('.')[1];
    var types = {
      html: 'text/html',
      css: 'text/css',
      jpg: 'image/jpg',
      png: 'image/png',
      ico: 'image/x-icon'
    }[extensions]

    fs.readFile(__dirname + '/public' + endpoint, function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.writeHead(200, {'Content-Type': types});
      response.end(file);
    });
  }
}

var server = http.createServer(handler);

server.listen(3000, function (request, response) {
    console.log("Server is listening on port 3000.  Ready to accept requests!");

});
