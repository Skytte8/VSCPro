// foreach.js
let tal = [1, 2, 3, 4, 5];

let sum = 0;
tal.forEach(element => sum += element);
console.log(sum); // => 15

tal.forEach(element => ++element);
console.log(tal); // => [ 1, 2, 3, 4, 5]

tal.forEach((element, index, array) => array[index]++);
console.log(tal); // => [ 2, 3, 4, 5, 6]