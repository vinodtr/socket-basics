var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

io.on('connection', function(socket) {
	console.log("User connected via socket.io");

	socket.on('message', function(message) {
		console.log('New message arrived from client: ' + message.text);
		socket.broadcast.emit('message', message);
	});

	io.emit('message', {
		text: "Welcome to the chat application!"
	})
});



app.use(express.static(__dirname + '/public'));
http.listen(PORT, function() {
	console.log("Server started");
});