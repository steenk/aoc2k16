var fs = require('fs');

fs.readFile('03.data', (err, stream) => {
	var data = stream.toString();
	var i = 0;
	for (var line of data.split('\n')) {
		var [a, b, c] = [line.substr(0,5)|0, line.substr(5,5)|0, line.substr(10,5)|0].sort((a,b) => a - b);
		if ((a + b) > c) {
			i += 1;
		}
	}
	console.log(i);
})