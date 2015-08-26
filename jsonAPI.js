var http = require('http');
var urlParser = require('url');

var port = process.argv[2];

function handleTime (date,format) {
	if (format==='unixtime') {
		return JSON.stringify({"unixtime": date.getTime()});
	}
	if (format==='parsetime') {
		var summary = {
			"hour":date.getHours(),
			"minute":date.getMinutes(),
			"second":date.getSeconds()
		};
		return JSON.stringify(summary);
	}
}

var server = http.createServer(function(req,res){
	var parsedURL = urlParser.parse(req.url,true);
	var date = new Date (parsedURL.query.iso);
	var pathname = parsedURL.pathname;
	var result;
	if (pathname==='/api/parsetime'){
		result = handleTime(date,'parsetime');
	}
	else if (pathname==='/api/unixtime') {
		result = handleTime(date,'unixtime');
	}

	if (result){
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(result,'utf8');
	}
	else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(port);