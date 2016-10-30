var socket = io();
socket.on('connect', function() {
	console.log('Connected to Socket I/O server');
});

var $form = jQuery("#chatForm");
socket.on('message', function(message) {
	console.log('New message arrived : ' + message.text);
	var $forum=$form.find('.messages');
	$forum.append('<p>' + message.text + '</p>');
});

// handles submitting a new chat message

$form.on('submit', function(event) {
	event.preventDefault();
	socket.emit('message', {
		text: $form.find('input[name=chatText]').val()
	});

});