// list.forEach(function(file) {
// 	file.split(".");
// 	if (file === fileExt) {
// 		console.log(file);
// 	}
// })

module.exports = function (fileDir, fileExt, callback) {
	var fs = require('fs');
	var path = require('path');
	fs.readdir(fileDir, function(err, list) {
		if (err) return callback(err);
		var final = [];
		for (var i = 0; i < list.length; i++) {
			var splitList = list[i].split(".");
			// var extension = path.extname(list[i])
			if (splitList[1] === fileExt) {
				console.log(list[i]);
				final.push(list[i]);
			}
		}
		callback(null, final);
  });
};
