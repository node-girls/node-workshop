var handler = require('./handlers.js');

function router(req , res) {
  var url = req.url;
  if (url == '/') {
    handler(req , res)
  }
}

module.exports = router;
