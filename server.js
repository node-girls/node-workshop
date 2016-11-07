var http = require('http');
var fs = require('fs');

var message = 'I am so happy to be part of the Node Girls workshop!';

function handler (request, response) {
  var endpoint = request.url;
  console.log(endpoint);
  var method = request.method;
  console.log(method);

  if (endpoint === '/node') {
    response.writeHead(200, {'content-type': 'text/html'});
    response.write('Endpoint is /node');
    response.end();
  } else if (endpoint === '/girls') {
    response.writeHead(200, {'content-type': 'text/html'});
    response.write('<h1>Endpoint is /girls</h1>');
    response.end();

  } else {
    response.writeHead(200, {'content-type': 'text/html'});

    fs.readFile(__dirname + '/public/index.html', function (error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  }
}

var server = http.createServer(handler);

server.listen(3000, function () {
  console.log('Server is listening on port 3000.  Ready to accept requests!');
});
