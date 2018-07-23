var path=require('path');
var fs=require('fs');
var handlers=require('./handlers');
var router=function (request,response){
  var url=request.url;


    handlers.handlerPublic(request, response , url);




}
module.exports=router;
