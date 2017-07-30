var http = require('http');
var router = require('./router.js');

var server = http.createServer(router);


server.listen(3000 , function() {
    console.log('the server is runnning on port : ' +4000);
})
