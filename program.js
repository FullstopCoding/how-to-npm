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

/*
const fs = require('fs');
const path = require('path');
const directory = process.argv[2];
const fileType = "." + process.argv[3];

function readIt() {
  fs.readdir(directory, function (err, list) {
    if (err) {
      return console.log(err);
    }
    let fileList = list.filter(function(el){
      return path.extname(el) === fileType;
    });

    for (var i = 0; i < fileList.length; i++) {
      console.log(fileList[i]);
    }

  });
}
readIt();
*/

/* NodeSchool solution
var fs = require('fs')
var path = require('path')
var folder = process.argv[2]
var ext = '.' + process.argv[3]

   fs.readdir(folder, function (err, files) {
     if (err) return console.error(err)
     files.forEach(function (file) {
       if (path.extname(file) === ext) {
         console.log(file)
       }
     })
   })
*/

// Exercise 6 - MAKE IT MODULAR

//1. Export a single function that takes exactly the arguments described.
//2. Call the callback exactly once with an error or some data as described.
//3. Don't change anything else, like global variables or stdout.
//4. Handle all the errors that may occur and pass them to the callback.

const fs = require('fs');
const path = require('path');
const module = require('./module.js')
const directory = process.argv[2];
const fileType = "." + process.argv[3];

function bar (callback) {
  foo(function (err, data) {
    if (err)
      return callback(err);
    callback(null, data);
  });
}

function readIt() {
  fs.readdir(directory, function (err, list) {
    if (err) {
      return console.log(err);
    }
    let fileList = list.filter(function(el){
      return path.extname(el) === fileType;
    });

    for (var i = 0; i < fileList.length; i++) {
      console.log(fileList[i]);
    }

  });
}
