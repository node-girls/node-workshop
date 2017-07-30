var handler = require('./handlers.js');

function router(req , res) {
  var url = req.url;
  if (url == '/') {
    handler.mainHandler(req , res);
  }
}

module.exports = router;
