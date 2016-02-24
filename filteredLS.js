var fs = require('fs');
var extension = new RegExp('\\.' + process.argv[3] + '$');

fs.readdir(process.argv[2], function(err, list) {
	for (var i = 0; i < list.length; i++) {
		if (extension.test(list[i])) {
			console.log(list[i]);
		}
	}
});




// Solution

// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//     list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//         console.log(file)
//     })
// });