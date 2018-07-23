const {
  handlerHome,
  handlerCreatePosts,
  handlerPosts,
  handlerStatic
} = require('./handlerES6');

const router = (req, res) => {
  const url = req.url;

  if (url === '/') {
    handlerHome(req, res);
  } else if (url === '/create-post') {
    handlerCreatePosts(req, res);
  } else if (url === '/posts') {
    handlerPosts(req, res);
  } else {
    handlerStatic(req, res);
  }
};

module.exports = router;
