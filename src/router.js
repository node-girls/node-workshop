var handler = require('./handlers.js');

function router(req , res) {
  var url = req.url;

  if (url === '/') {
    handler.mainHandler(req , res);
  } else if (url === '/node') {

      //...
  } else if (url === '/girls') {

      //...
  }else if (url === '/posts') {
    handler.postPosts(req , res);
  }else if (url === '/create-post') {
    handler.createPost(req , res);
  }else if (url.startsWith('/public')) {
    handler.genericHandler(req , res);
  } else {

  }

}

module.exports = router;
