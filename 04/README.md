# Advent of Code 2016 Day 4

## Part 1

```js
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
```

## Part 2

```js
const fs = require('fs'),
	alpha = 'abcdefghijklmnopqrstuvwxyz';

function rotate (c, i = 1) {
	if (c === '-') {
		return ' ';
	} else {
  		return alpha[(alpha.indexOf(c) + i) % alpha.length];
  	}
}

function decode (name, id) {
	return name.split('').map(c => rotate(c, id)).join('');
}

function real_sector_id (room) {
	var [_, name, id, chk] = /^(.+-)(\d+)\[(.+)\]/.exec(room),
		chars = name.split('-').join('').split(''),
		stat = {};
	chars.forEach(v => {
		stat[v] = stat[v] ? stat[v] + 1 : 1;
	});
	return Object.keys(stat).sort((a,b) =>
		(stat[a] + stat[b] > 2 && stat[a] !== stat[b]) ?
			stat[b] - stat[a] : a.charCodeAt(0) - b.charCodeAt(0)
	).join('').startsWith(chk) ? {name, id} : null;
}

fs.readFile('04.data', (err, stream) => {
	var data = stream.toString(), real, str;

	for (var r of data.split('\n')) {
		real = real_sector_id(r);
		if (real) {
			str = decode(real.name, real.id|0);
			if (str.match('north')) {
				console.log(str, real.id);
			}
		}
	}
})
```
