var socket = io();
socket.on('connect', function() {
	console.log('Connected to Socket I/O server');
});

socket.on('message', function(message) {
	console.log('New message arrived : ' + message.text);
});