var http = require('http');
var fs = require('fs');
var port = process.argv[2];  // first argument in command line
var file = process.argv[3];  // second argument in command line



var server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	fs.createReadStream(file).pipe(response);
});

server.listen(Number(port));