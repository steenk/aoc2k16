const fs = require('fs'),
	md5 = require('md5'),
	data = 'ojvtpuvg';

function hash (id, nr, pw) {
	if (pw.length === 8) {
		return pw;
	}
	var h = '';
	while (!/^00000/.exec(h)) {
		h = md5(id + nr);
		nr += 1;
	}
	return hash(id, nr, String(pw) + h.substr(5,1));
}

console.log(hash(data, 0, ''));