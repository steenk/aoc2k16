const fs = require('fs');

fs.readFile('04.data', (err, stream) => {
	var data = stream.toString(),
		sum = 0;

	for (var r of data.split('\n')) {
		sum += real_sector_id(r);
	}

	console.log(sum);
});

function real_sector_id (room) {
	var [_, name, id, chk] = /^(.+-)(\d+)\[(.+)\]/.exec(room),
		chars = name.split('-').join('').split(''),
		stat = {};
	chars.forEach(v => {
		stat[v] = stat[v] ? stat[v] + 1 : 1;
	});

	var sorted = Object.keys(stat).sort((a,b) => {
		if (stat[a] + stat[b] > 2 && stat[a] !== stat[b]) {
			return stat[b] - stat[a];
		} else {
			return a.charCodeAt(0) - b.charCodeAt(0);
		}
	}).join('');

	return sorted.startsWith(chk) ? id|0 : 0;
}