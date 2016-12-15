# Advent of Code 2016 Day 7

## Part 1

```js
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
```

## Part 2

```js
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
```
