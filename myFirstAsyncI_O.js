var fs = require('fs');

function logCount(contents) {
	var count = contents.split('\n').length-1;
	console.log(count);
}

fs.readFile(process.argv[2],'utf8',
	function (err,data) {
		if (err) {
			throw err;
		}
		logCount(data);
	}
	);