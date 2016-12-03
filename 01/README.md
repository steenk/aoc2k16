# Advent of Code 2016 Day 1

## Part 1

```js
var data = 'R4, R3, R5, L3, L5, R2, L2, R5, L2, R5, R5, R5, R1, R3, L2, L2, L1, R5, L3, R1, L2, R1, L3, L5, L1, R3, L4, R2, R4, L3, L1, R4, L4, R3, L5, L3, R188, R4, L1, R48, L5, R4, R71, R3, L2, R188, L3, R2, L3, R3, L5, L1, R1, L2, L4, L2, R5, L3, R3, R3, R4, L3, L4, R5, L4, L4, R3, R4, L4, R1, L3, L1, L1, R4, R1, L4, R1, L1, L3, R2, L2, R2, L1, R5, R3, R4, L5, R2, R5, L5, R1, R2, L1, L3, R3, R1, R3, L4, R4, L4, L1, R1, L2, L2, L4, R1, L3, R4, L2, R3, L1, L5, R4, R5, R2, R5, R1, R5, R1, R3, L3, L2, L2, L5, R2, L2, R5, R5, L2, R3, L5, R5, L2, R4, R2, L1, R3, L5, R3, R2, R5, L1, R3, L2, R2, R1';

var a = data.split(', '),
    p = {'L': -1, 'R': 1},
    v = 0,
    h = 0,
    r = 0,
    n;

for (var dir of a) {
  n = dir.substr(1);
  r = (4 + r + p[dir.substr(0,1)]) % 4, n = dir.substr(1)|0;
  if (r % 2 === 0) {
    v += (r - 1) * n;
  } else {
    h += (2 - r) * n;
  };
}
console.log(Math.abs(h) + Math.abs(v));
```

## Part 2

```js
var data = 'R4, R3, R5, L3, L5, R2, L2, R5, L2, R5, R5, R5, R1, R3, L2, L2, L1, R5, L3, R1, L2, R1, L3, L5, L1, R3, L4, R2, R4, L3, L1, R4, L4, R3, L5, L3, R188, R4, L1, R48, L5, R4, R71, R3, L2, R188, L3, R2, L3, R3, L5, L1, R1, L2, L4, L2, R5, L3, R3, R3, R4, L3, L4, R5, L4, L4, R3, R4, L4, R1, L3, L1, L1, R4, R1, L4, R1, L1, L3, R2, L2, R2, L1, R5, R3, R4, L5, R2, R5, L5, R1, R2, L1, L3, R3, R1, R3, L4, R4, L4, L1, R1, L2, L2, L4, R1, L3, R4, L2, R3, L1, L5, R4, R5, R2, R5, R1, R5, R1, R3, L3, L2, L2, L5, R2, L2, R5, R5, L2, R3, L5, R5, L2, R4, R2, L1, R3, L5, R3, R2, R5, L1, R3, L2, R2, R1';

var a = data.split(', '),
    p = {'L': -1, 'R': 1},
    v = 0,
    h = 0,
    r = 0,
    n, visited = {};

for (var dir of a) {
  n = dir.substr(1);
  r = (4 + r + p[dir.substr(0,1)]) % 4, n = dir.substr(1)|0;
  while ((n -= 1) >= 0) {
    if (r % 2 === 0) {
      v += (r - 1);
    } else {
      h += (2 - r);
    }
    if (visited[v + ';' + h]) {
      console.log('twice', '(' + h + ', ' + v +') distance:', Math.abs(h) + Math.abs(v));
      process.exit();
    }
    visited[v + ';' + h] = 1;
  }
}
```
