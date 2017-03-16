// Packages
var path = require("path");

// Routing for friends.js
module.exports = function (app) {
	app.get("/friends", function (req, res) {
		res.sendFile(path.join(__dirname, "/../data/friends.js"))
	})
};

// Routing for Survey HTML.
module.exports = function (app) {
	app.get("/survey", function (req, res ) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"))
	})
};


