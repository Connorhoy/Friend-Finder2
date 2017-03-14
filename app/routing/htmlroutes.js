//Packages
var path = require("path");

//Routing
module.exports = function (app) {
	app.get("/friends", function (req, res) {
		res.sendFile(path.join(__dirname, "/../public/friendsData."))
	})





};