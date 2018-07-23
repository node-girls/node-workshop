const fs = require('fs');
const querystring = require('querystring');
const path = require('path');
const posts = require('./posts.json');

const handlerHome = (request, response) => {
  const url = request.url;
  const filepath = path.join(__dirname, '..', 'public', 'index.html')

  fs.readFile(filepath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.end('404 - FILE NOT FOUND');
      return;
    }
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end(file);
  });
}

const handlerCreatePosts = (request, response) => {
  let allData = '';
  request.on('data', chunk => {
    allData += chunk;
  });

  request.on('end', () => {
    const timestamp = Date.now();
    const convertedData = querystring.parse(allData).post;

    filepath = path.join(__dirname, 'posts.json');
    posts[timestamp] = convertedData;

    fs.writeFile(filepath, JSON.stringify(posts), error => {
      if (error) {
        console.log(error);
        response.writeHead(500, {'Content-Type': 'text/plain'})
        response.end('500 - Internal Server Error');
        return;
      }
    });
    response.writeHead(302, {'Location': '/'});
    response.end();
  });
}

const handlerPosts = (request, response) => {
  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(JSON.stringify(posts));
}

const handlerStatic = (request, response) => {
  const url = request.url
  const extension = url.split('.')[1];
  const filepath = path.join(__dirname, '..', 'public', url);
  const type = {
    jpg: 'image/jpg',
    png: 'image/png',
    js: 'application/javascript',
    ico: 'image/x-icon',
    css: 'text/css'
  }[extension]

  fs.readFile(filepath, (error, file) => {
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
