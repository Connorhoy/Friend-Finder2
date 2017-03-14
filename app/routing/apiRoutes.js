//Needed packages
var path = require("path");

//Routing
module.exports = function(app) {
	app.get("/survey", function (req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"))
	});

	app.use(function (req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

// this needs to be converted to JSON to post.
   app.get("/friends", function (req, res) {
   	   res.sendFile(path.join(__dirname, "/../data/friends.js"));
   });
};