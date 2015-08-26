var net = require('net');

var port = process.argv[2];

function zeroPad (num) {
	if (String(num).length<2) {return '0'+num;}
	return num;
}

var server = net.createServer(function(socket){
	var now = new Date(Date.now());
	var stamp = now.getFullYear()+'-'+zeroPad(now.getMonth()+1)+'-'+zeroPad(now.getDate())+' '+zeroPad(now.getHours())+':'+zeroPad(now.getMinutes())+'\n';
	socket.end(stamp);
});

server.listen(port);

