// sort.js
let tal = [30, 4, 10, 2, 0];

console.log(tal.sort()); // => [ 0, 10, 2, 30, 4 ]
console.log(tal); // => [ 0, 10, 2, 30, 4 ]

tal.sort((a, b) => a-b);
console.log(tal); // => [ 0, 2, 4, 10, 30 ]

tal.sort((a, b) => b-a);
console.log(tal); // => [ 30, 10, 4, 2, 0 ]