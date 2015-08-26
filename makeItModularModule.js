var fs = require('fs');
var path = require('path');

module.exports = function (pathname,ext,cb) {
	fs.readdir(pathname,function(err,list){
		if (err) {return cb(err,null);}
		var filtered = list.filter(function(a){return path.extname(a)==='.'+ext;});
		cb(null,filtered);
	});		
};