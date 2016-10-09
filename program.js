//  Exercise 1: of course, a hello world
//console.log("HELLO WORLD")

//  Exercise 2: Accessing the command line and arguments (passed to the command line)
//  Adds elements together starting at position 2, through the end
// var sum = 0
// var arrayCopy = process.argv
// for (var i = 2; i < arrayCopy.length; i++) {
//  Must 'coerce' into a Number
// 	var arrayNumber = Number(arrayCopy[i])
// 	sum += arrayNumber
// 	}
// console.log(sum)

//  Exercise 3: Synchronous filesystem operations!
//  Require the filesystem module
// var fs = require('fs');
// var filePath = process.argv[2];
// var data = fs.readFileSync(filePath, 'utf8');
// var newLines = data.split(/\n/).length - 1;
// console.log(newLines);

//  Exercise 4: An Asynchronous filesystem operation!
// var fs = require('fs');
// function getData() {
// 	fs.readFile(process.argv[2], 'utf8', function done(err, data) {
// 		// console.log(data);
// 	if (err) throw err;
// 	var newLines = data.split(/\n/).length - 1;
// 	console.log(newLines);
// })
// }
// getData();

//  Exercise 5: Filter a list of filenames in a directory for a certain file extension
var fs = require('fs');
function getFiles() {
	fs.readdir(process.argv[2], function callback(err, list) {
		if (err) throw err;
		var extensionFilter = process.argv[3];
		for (var i = 0; i < list.length; i++) {
			var splitList = list[i].split(".");
			if (splitList[1] == extensionFilter) {
				console.log(list[i]);
			}
		}
	})
}
getFiles();
