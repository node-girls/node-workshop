var path=require('path');
var fs=require('fs');

var ServerError =function (request, response,error){
  console.log(error);
  response.writeHead(500, "Content-Type: text/html");
  response.end("<h1>Sorry man ! </h1>");
};

var handlerPublic = function(request, response,url) {
  var extensionType = {
    css: "text/css",
    js: "application/javascript",
    html: "text/html",
    ico: "image/x-icon",
    jpg: "image/jpeg"
  };
  var extension,filePath;
    if(url==='/'){
           extension='html';
           filePath=(__dirname+'/../public/index.html');
    }
    else{ extension = url.split(".")[1];
    console.log(url);
          filePath = path.join(__dirname, "..","public", url);
          console.log(filePath)
}
  fs.readFile(filePath, function(error, file) {
    if (error) {
  //    console.log(filePath+"the error");
       ServerError(request,response,error);
       return;
    }
    response.writeHead(200, { "Content-Type": extensionType[extension] });
    response.end(file);
  });

};





module.exports = { handlerPublic };
