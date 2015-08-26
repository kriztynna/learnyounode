// My solution without bl
var http = require('http');
var urlList = process.argv.slice(2);

var finalResults = [];

urlList.forEach(httpAggregator);

function httpAggregator (url,idx) {
	http.get(url,function(response){
		var output = '';
		response.on('error',console.error);
		response.setEncoding('utf8');
		response.on('data',function(data){
			output+=data;
		});
		response.on('end',
			function(){
				finalResults[idx]=output;
				finallyPrint(finalResults);
			});
	});
}

function finallyPrint(results){
	if (results.filter(function(a){return a;}).length===3){
		results.forEach(function(r){console.log(r);});
	}
}