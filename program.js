//<<<<<<< HEAD
//console.log("HELLO WORLD")
// var sum = 0
// var arrayCopy = process.argv
// for (var i = 2; i < arrayCopy.length; i++) {
// 	var arrayNumber = Number(arrayCopy[i])
// 	sum += arrayNumber
// 	}
// console.log(sum)
// =======
// var sum = 0;
// var arrayCopy = process.argv;
// for (var i = 2; i <  arrayCopy.length; i++) {
// 	var arrayNumber = Number(arrayCopy[i]);
// 	sum += arrayNumber;
// 	};
// console.log(sum)

var fs = require('fs');
var filePath = process.argv[2];
var data = fs.readFileSync(filePath, 'utf8');
var newLines = data.split(/\n/).length - 1;
console.log(newLines);
//>>>>>>> f1ec0860550559ea0748335eae4567312173f078
