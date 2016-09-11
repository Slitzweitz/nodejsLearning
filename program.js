var arr = process.argv;

var toAdd = arr.slice(2);

toAdd.reduce( (prev, curr) => prev + curr );

console.log(toAdd);


