const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("Socket.io")(server);

app.use(express.static("public"));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('A user connected - sending dungeon data...');
	socket.on('disconnect', function(){
		delete gameState.players[socket.id]
	});
	
	socket.on('chat message', function(data){
		console.log('message received: ',data);
		io.emit('chat message', data);
	});	
	
	
});

const gameState = {
	players: {}
}



server.listen(8081, function(){
	console.log("Naether server has started - connect to http://localhost:8081");
	console.log("Town generated!");
});