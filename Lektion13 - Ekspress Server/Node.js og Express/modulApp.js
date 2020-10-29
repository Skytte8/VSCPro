// modulApp.js
const o1 = require('./modul1');
console.log(o1.x); // => 1

const {x} = require('./modul1');
console.log(x); // => 1

const o2 = require('./modul2');
console.log(o2.p.y); // => 2
console.log(o2.q.z); // => 3

const {p, q} = require('./modul2');
console.log(p.y); // => 2
console.log(q.z); // => 3