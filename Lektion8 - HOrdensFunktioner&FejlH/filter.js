// filter.js
let tal = [1, 2, 3, 4, 5];

let talMindreEnd3 = tal.filter(element => element < 3);
console.log(talMindreEnd3); // => [ 1, 2 ]

let uligeTal = tal.filter(element => element % 2);
console.log(uligeTal); // => [ 1, 3, 5 ]