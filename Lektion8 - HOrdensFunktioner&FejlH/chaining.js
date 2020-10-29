// chaining.js
let personer = [{navn: 'Åge', alder: 32}, {navn: 'Ida', alder: 23}];

console.log(personer.map(p => p.alder).reduce((a, e) => a + e)); // => 55

console.log(personer.sort((p1, p2) => p1.alder - p2.alder).map(p => p.navn));
// => [ 'Ida', 'Åge' ]

console.log(personer.find(p => p.navn === 'Ida').alder); // => 23