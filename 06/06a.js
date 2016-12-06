const fs = require('fs');

fs.readFile('06.data', (err, stream) => {
	var data = stream.toString(),
		stats = [{}, {}, {}, {}, {}, {}, {}, {}];
	for (var line of data.split('\n')) {
		line.split('').forEach((v, i) => {
			stats[i][v] = stats[i][v] ? 1 + stats[i][v] : 1;
		})
	}
	var max = 0, c, str = '';
	for (var s of stats) {
			max = 0;		
		Object.keys(s).forEach(chr => {
			if (s[chr] > max) {
				max = s[chr];
				c = chr;
			} 
		})
		str += c;
	}
	console.log(str)
})