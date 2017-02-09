/* 2. Your `server.js` file should require the basic npm packages we've used in
class: `express`, `body-parser` and `path`. */

var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");

var app = express(); // create express server
var port = process.env.port || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: "application/vnd.api+json"
}));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
	console.log("listening on port: " + port);
});