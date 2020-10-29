// reduce.js
let tal = [1, 2, 3, 4, 5];

let sum = tal.reduce((akkumulator, element) => akkumulator + element);
console.log(sum); // => 15

let max = tal.reduce((akkumulator, element) =>
    akkumulator > element ? akkumulator : element);
console.log(max); // => 5