var fs = require('fs');

fs.readFile('03.data', (err, stream) => {
	var data = stream.toString(),
		i = 0, j = 0, a = [], b;
	for (var line of data.split('\n')) {
		a = a.concat([line.substr(0,5)|0, line.substr(5,5)|0, line.substr(10,5)|0]);
		if ((i += 1) % 3 === 0) {
			for (var x of [0,1,2]) {
				b = [a[x], a[x+3], a[x+6]].sort((a,b) => a - b);
				if (b[0] + b[1] > b[2]) {
					j += 1;
				}
			}
			a = [];
		}
	}
	console.log(j);
})