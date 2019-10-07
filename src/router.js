const { homeHandler, publicHandler } = require("./handler");
const router = (request, response) => {
	const endpoint = request.url;
	if (endpoint === "/") {
		homeHandler(request, response);
	} else if (endpoint.split(".")[1]) {
		publicHandler(request, response, endpoint);
	}
};

module.exports = router;
