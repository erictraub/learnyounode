var http = require('http');

http.get(process.argv[2], function(response) {
	response.on("data", function(data) {
	console.log(data.toString());
	})
});


// cleaner/more thorough version

// var http = require('http');

// http.get(process.argv[2], function(response) {
// 	response.setEncoding('utf8');   // ->  changes data from buffer to to string 
// 	response.on("data", console.log);
// 	response.on("error", console.error)
// });