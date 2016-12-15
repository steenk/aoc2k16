const fs = require('fs');

fs.readFile('07.data', (err, stream) => {
	var data = stream.toString(),
		count = 0;

	for (var line of data.split('\n')) {
		var outside = line.split(/\[.+?\]/),
			inbracket = line.match(/\[.+?\]/g),
			pass = false,
			res,
			re = /(.).\1/g,
			samechrs = /(.)\1\1/,
			abas = [], x = 0;
		
		for (var str of outside) {
			while (res = re.exec(str)) {
				re.lastIndex -= 2;
				if (res && !samechrs.exec(res[0])) {
					abas.push(res[0]);
				}
				x += 1;
				if (x > 10) process.exit();
			}
		}

		abas.forEach(aba => {
			bab = aba.replace(/(.)(.)./, '$2$1$2');
			pass = pass || !!inbracket.join('').match(bab);
		});
		if (pass) {
			count += 1;
		}
		
	}
	console.log(count);
});