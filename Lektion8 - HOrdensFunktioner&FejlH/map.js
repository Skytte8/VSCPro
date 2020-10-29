// map.js
let tal = [1, 2, 3, 4, 5];

let talPlus1 = tal.map(element => ++element);
console.log(talPlus1); // => [ 2, 3, 4, 5, 6 ]

let talKvadrat = tal.map(Math.pow);
console.log(talKvadrat); // => [ 1, 2, 9, 64, 625 ]

let talLige = tal.map(element => element % 2 == 0);
console.log(talLige); // => [ false, true, false, true, false ]