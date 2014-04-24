//Node modules for the upload of ck file and for launching different process
var fs = require('fs')
  , sys = require('sys')
  , exec = require('child_process').exec
  , util = require('util')
  , Files = {};


//Serve client side statically
var http = require('http');
var express = require('express');
var app = express();
app.use(express.static(__dirname));

var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}
function puts(error, stdout, stderr) { 
	sys.puts(stdout) 
}


io.sockets.on('connection', function (socket) {
	exec("chuck --loop", puts);

	socket.on('SendFile', function (data){
		var file = data['File'];
    var name = data['Name'];
		fs.writeFile(__dirname +"/File/"+name, file , function(err) {
    	if(err) {
        	console.log(err);
    	} else {
        	exec("chuck + File/"+name, puts);
    	}
});
	});
});
