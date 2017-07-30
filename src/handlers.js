var fs = require('fs');

function mainHandler (req, res) {
  fs.readFile(__dirname + '/../public/index.html' , function(err , data) {
    if (err) {
      res.writeHead(500, {"Content-Type": "text/html"});
      res.end('<h1>Internal Server Error , sorry :(</h1>'); // finish response
    }else {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(data); // finish response
    }
  })

}
module.exports = {
  mainHandler : mainHandler
};
