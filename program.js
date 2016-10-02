var sum = 0;
var arrayCopy = process.argv;
for (var i = 2; i <  arrayCopy.length; i++) {
	var arrayNumber = Number(arrayCopy[i]);
	sum += arrayNumber;
	};
console.log(sum)

