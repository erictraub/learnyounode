var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {

	if (request.method === 'GET') {
		var parsedURL = url.parse(request.url, true);  // this is the URL object with properties (like example in direcitons)
		var date = new Date(parsedURL.query['iso']);  
		response.writeHead(200, {"Content-Type": "application/json"});

		if (parsedURL.pathname === "/api/parsetime") {
			response.end(JSON.stringify({hour: + date.getHours(),
						 minute: + date.getMinutes(), 
						 second: + date.getSeconds() }));
		}
		else if (parsedURL.pathname === "/api/unixtime") {
			response.end(JSON.stringify({unixtime: date.valueOf()}));
		}
	}
});


server.listen(process.argv[2]);









// Alternate way (solution)

// var http = require('http')
//      var url = require('url')

//      function parsetime (time) {
//        return {
//          hour: time.getHours(),
//          minute: time.getMinutes(),
//          second: time.getSeconds()
//        }
//      }

//      function unixtime (time) {
//        return { unixtime : time.getTime() }
//      }

//      var server = http.createServer(function (req, res) {
//        var parsedUrl = url.parse(req.url, true)
//        var time = new Date(parsedUrl.query.iso)
//        var result

//        if (/^\/api\/parsetime/.test(req.url))
//          result = parsetime(time)
//        else if (/^\/api\/unixtime/.test(req.url))
//          result = unixtime(time)

//        if (result) {
//          res.writeHead(200, { 'Content-Type': 'application/json' })
//          res.end(JSON.stringify(result))
//        } else {
//          res.writeHead(404)
//          res.end()
//        }
//      })
//      server.listen(Number(process.argv[2]))



