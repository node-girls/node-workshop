var http = require('http');
var router = require('./router.js');
var PORT = 4000;

var server = http.createServer(router);


server.listen(process.env.PORT || PORT , () => {
  console.log(`Server running on ${PORT}`);
});
