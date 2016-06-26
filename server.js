var http = require('http');
var fs = require('fs');

var message = 'reading files';

function handler (request, response) {

  if(endpoint === "/"){
    response.writeHead (200, {"Content-Type" : "text/html"});

    fs,readFile(__dirname + '/public/index.html', function(error, file){
      if(error) {
        console.log(error);
        return;
      }

      response.end(file);
    });
  }

}
//   var method = request.method;
//   console.log(method);
//   var endpoint = request.url;
//   console.log(endpoint);
//   response.write(message); //response body
//   response.end(); //finish response
//
// }

var server = http.createServer(handler);

server.listen(3000, function(){
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
