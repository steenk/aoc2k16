# Advent of Code 2016 Day 8

## Part 1 and 2

```js
const fs = require('fs'),
	dim = {
		x: 50,
		y: 6
	}

var screen = new Array(dim.x * dim.y);
screen.fill('.');

function positions (pos, val) {
	var out = [], rot = -1, p,
		orto = dim.x + dim.y - dim[pos];
	while ((rot += 1) < orto) {
		if (pos === 'x') {
			out.push((val|0) + dim[pos] * rot);
		} else {
			out.push((val|0) * orto + rot);
		}
	}
	return out;
}

const commands = {
	rect: (screen, ...attr) => {
		var [w, h] = attr[0].split('x'),
			x = -1, y = -1;
		while ((x += 1) < h) {
			while ((y += 1) < w) {
				screen[x * dim.x + y] = '#';
			}
			y = -1;
		}
	},
	rotate: (screen, ...attr) => {
		var [pos, val] = String(attr[1]).split('='),
			by = attr[3],
			last, move,
			row = positions(pos, val);

		while ((by -= 1) > -1) {
				last = screen[row[row.length - 1]];
				row.forEach(p => {
					move = screen[p];
					screen[p] = last;
					last = move;
				})
		}
	}
}

function print_screen () {
	var x = y = -1;
	while ((x += 1) < dim.y) {
		process.stdout.write('|');
		while ((y += 1) < dim.x) {
			process.stdout.write(screen[x * dim.x + y] || ' ');
		}
		y = -1;
		process.stdout.write('|\n');
	}
}

fs.readFile('08.data', (err, stream) => {
	var data = stream.toString(), count = 0, i = 0;
	for (var line of data.split('\n')) {
		var [command, ...attr] = line.split(/\s+/);
		commands[command](screen, ...attr);
	}
	for (var light of screen) {
		if (light === '#') {
			count += 1;
		}
	}
	console.log('Part 1: ' + count + ' ligths');
	console.log('\nPart 2:');
	print_screen();
});
```
