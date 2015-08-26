// My solution without bl
var http = require('http');
var url = process.argv[2];

http.get(url,function(response){
	var output = '';
	response.on('error',console.error);
	response.setEncoding('utf8');
	response.on('data',function(data){
		output+=data;
	});
	response.on('end',function(){
		console.log(output.length);
		console.log(output);
	});
});


// Again, with bl
// var http = require('http');
// var bl = require('bl');
// var url = process.argv[2];

// http.get(url,function(response){
// 	response.pipe(bl(function(err,data){
// 		if (err) {return console.error(err);}
// 		data = data.toString();
// 		console.log(data.length);
// 		console.log(data);
// 	}));
// });
