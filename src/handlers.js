var fs = require('fs');
var querystring = require('querystring');
var contentType = {
  js : 'application/javascript',
  css : 'text/css',
  html : 'text/html',
  ico : 'image/x-icon',
  jpg : 'image/jpeg',
  png : 'image/png'
}

function mainHandler (req, res) {
  fs.readFile(__dirname + '/../public/index.html' , function(err , data) {
    if (err) {
      console.log(err);
      res.writeHead(500, {"Content-Type": "text/html"});
      res.end('<h1>Internal Server Error , sorry :(</h1>'); // finish response
    }else {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(data); // finish response
    }
  })

}
function genericHandler(req , res) {
  var url = req.url;
  var exten = url.split('.');
  var myExten = exten[exten.length - 1];

  fs.readFile(__dirname + '/..' + url , function(err , data) {
    if (err) {
      console.log(err);
      res.writeHead(500, {"Content-Type": "text/html"});
      res.end('<h1>Internal Server Error , sorry :(</h1>');
    }else {
      res.writeHead(200, {"Content-Type": contentType[myExten]});
      res.end(data); // finish response
    }
  })
}
function createPost(req , res) {
  var allTheData = '';
  req.on('data', function (chunkOfData) {

      allTheData += chunkOfData;
  });

  req.on('end', function () {
    var convertedData = querystring.parse(allTheData);
    res.writeHead(302, {
      'Location': '/'
    });
    res.end();
  });
}
function postPosts(req ,res) {
  var url = req.url;
  fs.readFile(__dirname + '/posts.json' , function(err , data) {
    if (err) {
      console.log(err);
    }else{
      res.end(data)
    }

  });
}
module.exports = {
  mainHandler : mainHandler,
  genericHandler : genericHandler,
  createPost : createPost ,
  postPosts : postPosts
};
