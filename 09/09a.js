const fs = require('fs');

fs.readFile('09.data', (err, stream) => {
	var data = stream.toString(),
		out = '',
		re = /.*?\(\d+x\d+\)/g,
		res, last_idx;

	while (res = re.exec(data)) {
		var [_, first, a, b] = /^(.*)\((\d+)x(\d+)\)/.exec(res[0]),
			part = data.substr(res.index + res[0].length, a);
		out += first;
		for (var i = 0; i < b|0; i += 1) {
			out += part;
		}
		re.lastIndex = last_idx = re.lastIndex + (a|0);
	}
	out += data.substr(last_idx);
	console.log(out.length);
})