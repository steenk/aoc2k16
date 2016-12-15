const fs = require('fs'),
	re_oxy = /(.)(.)\2\1/;

fs.readFile('07.data', (err, stream) => {
	var data = stream.toString(),
		count = 0;

	for (var line of data.split('\n')) {
		line = line.replace(/(.)\1{3,}/, 'ABCD');
		var outside = line.split(/\[.+?\]/);
			inbracket = line.match(/\[.+?\]/g),
			pass = false,
			nopass = false;
		for (var str of outside) {
			pass = pass || !!re_oxy.exec(str);
		}
		for (var str of inbracket) {
			nopass = nopass || !!re_oxy.exec(str.replace(/\[|\]/g, ''));
		}
		if (pass && !nopass) {
			count += 1;
		}
	}
	console.log(count);
});