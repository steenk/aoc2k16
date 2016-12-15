const fs = require('fs');

var world = {},
	instr = {};

fs.readFile('10.data', (err, stream) => {
	var data = stream.toString();
	init(data);
	run();
	console.log('ANSWER PART 2: ' + world['output0'][0] * world['output1'][0] * world['output2'][0]);
})

function init (data) {
	var val, bot, low, hi;
	for (var line of data.split('\n')) {
		var stmt = /^value\s(\d+)\s.+?(\d+)/.exec(line);
		if (stmt) {
			[val, bot] = stmt.splice(1, 2);
			give('bot' + bot, val);
		} else {
			[_, bot, ldest, low, hdest, hi] = /^bot\s(\d+)\s.+(bot|output)\s(\d+)\s.+(bot|output)\s(\d+)/.exec(line);
			instr['bot' + bot] = {}
			instr['bot' + bot].hi = hdest + hi;
			instr['bot' + bot].low = ldest + low;
		}
	}
}

function give (bot, val) {
	world[bot] ? world[bot].push(val) : (world[bot] = [val]);
}

function run () {
	var act, hi, lo;
	Object.keys(world).forEach(bot => {
		if (world[bot].length === 2) {
			hi = Math.max.apply(null, world[bot]);
			lo = Math.min.apply(null, world[bot]);
			give(instr[bot].hi, hi);
			give(instr[bot].low, lo);
			world[bot] = [];
			act = true;
			if (hi === 61 && lo === 17) {
				console.log('ANSWER PART 1: ' + bot);
			}
		}
	});
	if (act) run();
}