var mod = require('./makeItModularModule');

var pathname = process.argv[2];
var ext = process.argv[3];
var callbackFn = function (err,list) {
	if (err) {return console.error(err);}
	list.map(function(a){console.log(a);});
}

mod(pathname,ext,callbackFn);