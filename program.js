//console.log(process.argv);



// Exercise 2 - Baby Steps

/*
var total = 0;

function babySteps(el) {
  for (var i = 2; i < el.length; i++) {
    total += parseInt(el[i]);
  }
  console.log(total);
}

babySteps(process.argv);
*/

// Exercise 3 - My First I/O!

/*
var fs = require('fs');
var file = fs.readFileSync(process.argv[2]).toString();
console.log(file.split("\n").length-1);
*/

// Exercise 4 - My First ASYNC I/O!
//
/*
var fs = require('fs');

function asyncRead() {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    if (err) {
      return console.log(err);
    }
    var file = fileContents.toString();
    console.log(file.split("\n").length-1);
  });
}

asyncRead();
*/

// Exercise 5 - Filtered LS

//You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

const fs = require('fs');
const path = require('path');

var directory = process.argv[2];
var fileType = "." + process.argv[3];

function readIt() {
  fs.readdir(directory, function callback(err, list) {
    if (err) {
      return console.log(err);
    }
    console.log(directory);
    let fileList = list.filter(function(el){
      return path.extname(el) === fileType;
    });
    console.log(fileList);

  });
}
