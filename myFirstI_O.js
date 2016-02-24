var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]); // argument passed is 3rd arguemnt on commonad line when program is called
var arr = contents.toString().split("\n");
console.log(arr.length-1); // -1 becuase asking for "new" lines not total lines

