var fs = require('fs');
var path = require('path');

var pathname = process.argv[2];
var ext = process.argv[3];

fs.readdir(pathname,function(err,list){
	list.forEach(function(filename){
		if (path.extname(filename) === '.'+ext){console.log(filename);}
	});
});


