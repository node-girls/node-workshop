const fs = require("fs");
const path = require("path");
const homeHandler = (request, response) => {
	const filePath = path.join(__dirname, "../public/index.html");
	fs.readFile(filePath, (error, file) => {
		if (error) {
			return console.log(error);

			response.writeHead(500, { "Content-Type": "text/html" });
			response.end("server error");
		} else {
			response.writeHead(200, {
				"Content-Type": "text/html"
			});
			response.end(file);
		}
	});
};

const publicHandler = (request, response, endpoint) => {
	const extinsion = endpoint.split(".")[1];
	const extinsionType = {
		html: "text/html",
		css: "text/css",
		js: "application/javascript",
		jpg: "image/jpg",
		ico: "image/x-icon"
	};

	const filePath = path.join(__dirname, "/../public", endpoint);
	fs.readFile(filePath, (error, file) => {
		if (error) {
			response.writeHead(500, { "Content-Type": "text/html" });
			response.end("server error");
		} else {
			response.writeHead(200, {
				"Content-Type": extinsionType[extinsion]
			});
			response.end(file);
		}
	});
};
module.exports = { homeHandler, publicHandler };
