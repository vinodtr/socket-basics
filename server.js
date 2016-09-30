var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

io.on('connection', function() {
	console.log("User connected via socket.io");
});

app.use(express.static(__dirname + '/public'));
http.listen(PORT, function() {
	console.log("Server started");
});