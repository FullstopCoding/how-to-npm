//You must write a module file to do most of the work. The module must export a single function that takes three arguments: the directory name,the filename extension string and a callback function, in that order. The filename extension argument must be the same as what was passed to your program. Don't turn it into a RegExp or prefix with "." or do anything except pass it to your module where you can do what you need to make your filter work.

module.exports = fs.readdir(dirName, fnExt, function(err, list) {
  if (err) {
    return console.log(err);
  }
  let fileList = list.filter(function(el) {
    return path.extname(el) === fileType;
  });

  for (var i = 0; i < fileList.length; i++) {
    console.log(fileList[i]);
  }

});
