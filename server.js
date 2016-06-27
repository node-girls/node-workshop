var http = require('http');
var fs = require('fs');

var message1 = 'endpoint is node!';
var message2 = 'endpoint is girls!';
var message3 = 'reading files';
var files = [''];

var port = 4000;

function handler (request, response) {
  var url = request.url;

  if(url.length === 1){
    fs.readFile(__dirname + '/public/index.html', function(error, file){
      if(error) {
        console.log(error);
        response.end();
      } else {
        response.writeHead (200, {'Content-Type': 'text/html'});
        response.end(file);
      }
    });

  } else if (url.indexOf('/node') > -1 ){
    response.writeHead (200, {'Content-Type': 'text/html'});
    response.end(message1); //response body
  } else if (url.indexOf('/girls') > -1){
    response.writeHead (200, {'Content-Type': 'text/html'});
    response.end(message2); //response body
  } else {
    fs.readFile(__dirname + '/public/' + url, function(error, file){
      if(error) {
        console.log(error);
        response.end();
      } else {
        var ext = url.split('.')[1];
        response.writeHead (200, {'Content-Type': 'text/' + ext});
        response.end(file);
      }
    });
  }
}

http.createServer(handler).listen(port);

console.log('im listening! this is port: ' + port);
