var fs = require('fs');
var querystring = require('querystring');
var path = require('path');
var posts = require('./posts.json');

var handlerHome = function(request, response) {
  var url = request.url;
  var filepath = path.join(__dirname, '..', 'public', 'index.html')
  response.writeHead(200, {'Content-Type' : 'text/html'});
  fs.readFile(filepath, function(error, file) {
    if (error) {
      console.log(error);
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end('404 - FILE NOT FOUND');
      return;
    }
    response.end(file);
  });
}

var handlerCreatePosts = function(request, response) {
  console.log(request.url);
  var allData = '';

  request.on('data', function(chunk) {
    allData += chunk;
  });
  request.on('end', function() {
    var timestamp = Date.now();

    var convertedData = querystring.parse(allData).post;

    filepath = path.join(__dirname, 'posts.json');
    posts[timestamp] = convertedData;

    fs.writeFile(filepath, JSON.stringify(posts), function(error) {
      if (error) {
        console.log(error);
        response.writeHead(500, {'Content-Type': 'text/plain'})
        response.end('500 - Internal Server Error');
        return;
      }
    });
    response.writeHead(307, {'Location': '/'});
    response.end();
  });
}

var handlerPosts = function(request, response) {
  console.log(request.url);
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(JSON.stringify(posts));
}

var handlerStatic = function(request, response) {
  var url = request.url
  console.log(url);
  var extension = url.split('.')[1];
  filepath = path.join(__dirname, '..', 'public', url)
  var type = {
    jpg: 'image/jpg',
    png: 'image/png',
    js: 'application/javascript',
    ico: 'image/x-icon',
    css: 'text/css',
    png: 'image/png'
  }[extension]

  fs.readFile(filepath, function(error, file) {
    if (error) {
      console.log(error);
      response.writeHead(404, {'Content-Type': 'text/plain'})
      response.end('404 - FILE NOT FOUND');
      return;
    }
    response.writeHead(200, {'Content-Type': type});
    response.end(file);
  });
}

module.exports = {
  handlerHome,
  handlerCreatePosts,
  handlerPosts,
  handlerStatic } ;
