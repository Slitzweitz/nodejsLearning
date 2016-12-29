// T O P




//  Exercise 12 - an HTTP server that receives only POST requests
//  It also converts the body of incoming POST requests to upper case and returns it
//  It should listen on port provided by 'first' argument
//  Use the streaming capabilities of {request} and {response}
//  Use through2-map, works much like Array#map()

const http = require('http');
const fs = require('fs');
const map = require('through2-map');
var port = Number(process.argv[2]);

var server = http.createServer(function (request, response) {
  request.setMaxListeners(0);
  response.setMaxListeners(0);
  if (request.method == "POST") {
    // console.log("POST");
    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  request.on('error', function(e) {handleError(e)});
  }
  else {
    console.log("Not POST")
  };
});

server.listen(port);

//  Exercise 11 - an HTTP file server
//  Write an HTTP server that serves the same text file for each request it receives
//  Server should listen on the port provided as 'first' argument
//  location of file to serve will be 'second' argument
//  Must use fs.createReadStream() to stream the file contents to the response
//
// const http = require('http');
// const fs = require('fs');
// var port = process.argv[2];
//
// var server = http.createServer(function (req, res) {
//   var fileToServe = process.argv[3];
//   var readStream = fs.createReadStream(fileToServe);
//   readStream.pipe(res);
// });
// server.listen(port);

// // Exercise 10 - a raw TCP server!
// const net = require('net')
// const strftime = require('strftime')
// var port = process.argv[2]
//
// // createServer method to return an instance of the server
// var server = net.createServer(function (socket) {
//   // code for socket handling logic
//   // write the date and 24hr time: YYYY-MM-DD hh:mm
//   if (port !== "") {
//     socket.write(strftime('%F %H:%M\n')) // socket.write(currentDate)
//     socket.end()
//   }
// })
// // must call server.listen(port)
// server.listen(port)


//  Exercise 9: an HTTP server!
// function getHttp(index, callback) {
// 	http.get(process.argv[2+ index], function (response) {
// 		response.setEncoding("utf8")
// 		response.pipe(bl(function (err, data) {
// 			if (err) callback(err)
// 			arrayList[index] = data.toString()
// 			counter++
//
// 			if (counter == 3) {
// 				printer()
// 			}
// 		}))
// 	})
// }
//
// for (var i = 0; i < 3; i++) {
// 	getHttp(i)
// }

// const http = require('http')
// const bl = require('bl')
// const async = require('async')
//
// function goGet() {
// 	return new Promise(function(resolve, reject){
// 		http.get(process.argv[2], function callback(response) {
// 			response.setEncoding('utf8')
// 			response.pipe(bl(function (err, data){
// 				if (err) return reject(err)
//
// 			}))
// 		})
// 	})
// }
//


//  Exercise 8
// 	const http = require('http')
// 	const bl = require('bl')
//
// 	var counter = 0
// 	 arrayList =[]
// 	// const urls = process.argv.slice(2)
//
// function printer() {
// 	for (var i = 0; i < 3; i++) {
// 		console.log(arrayList[i])
// 	}
// }
//

//  Exercise 7: HTTP client. requires the http core and uses a http.get() method. URL is passed to get()
// var http = require("http")
//
// http.get(process.argv[2], function callback (response) {
// 	response.setEncoding("utf8")
// 	response.on("data", function (data) {
// 		console.log(data)
// 	})
// })

//  Exercise 6: use a module to do the work, require it and call it passing in the command line arguments
// var mymodule = require('./mymodule');
// mymodule(process.argv[2],process.argv[3],function(err, data) {
// 	if (err) return callback(err);
// });

//  Exercise 5: Filter a list of filenames in a directory for a certain file extension
// var fs = require('fs');
// function getFiles() {
// 	fs.readdir(process.argv[2], function callback(err, list) {
// 		if (err) throw err;
// 		var extensionFilter = process.argv[3];
// 		for (var i = 0; i < list.length; i++) {
// 			var splitList = list[i].split(".");
// 			if (splitList[1] == extensionFilter) {
// 				console.log(list[i]);
// 			}
// 		}
// 	})
// }
// getFiles();

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

//  Exercise 3: Synchronous filesystem operations!
//  Require the filesystem module
// var fs = require('fs');
// var filePath = process.argv[2];
// var data = fs.readFileSync(filePath, 'utf8');
// var newLines = data.split(/\n/).length - 1;
// console.log(newLines);
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

//  Exercise 1: of course, a hello world
//console.log("HELLO WORLD")
