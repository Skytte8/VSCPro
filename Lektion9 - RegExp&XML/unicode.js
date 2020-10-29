// unicode.js
console.log("Rødgrød med fløde".match(/\b\w+?\b/g));
// => [ 'R', 'dgr', 'd', 'med', 'fl', 'de' ]
console.log("Rødgrød med fløde".match(/\p{Letter}+/ug));
// => [ 'Rødgrød', 'med', 'fløde' ]
console.log("Красная каша со сливками".match(/\p{Letter}+/ug));
// => [ 'Красная', 'каша', 'со', 'сливками' ]
// Ifølge Google Oversæt: ~ Rødgrød med fløde
