const fs = require('fs'),
	md5 = require('md5'),
	data = 'ojvtpuvg';

function hash (id, nr, pw) {
	if (pw.indexOf('-') === -1) {
		return pw.join('');
	}
	var h = '';
	while (!/^00000/.exec(h)) {
		h = md5(id + nr);
		nr += 1;
	}
	var [p, c] = [h.substr(5,1), h.substr(6,1)];
	if ((parseInt(p) + 1) && p < 8 && pw[p] === '-') {
		pw[p] = c;
	}
	console.log(id, nr, pw);
	return hash(id, nr, pw);
}
console.log(hash(data, 0, ['-', '-', '-', '-', '-', '-', '-', '-']));