var fs = require('fs');

fs.readFile(process.argv[2], function(error, contents) {
	var lines = contents.toString().split('\n');
	console.log(lines.length-1);
});


// process.argv[2] is file name (first argument (3rd item) passed in the
// command line by the test)