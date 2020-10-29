let str = "The cat's name is Garfield";
console.log(/^The/.test(str)); // => true
console.log(/field$/.test(str)); // => true
console.log(/^The cat's name is Garfield$/.test(str)); // => true
console.log(/\bThe\b/.test(str)); // => true
console.log("Rødgrød".match(/\b\w+?\b/g)); // => [ 'R', 'dgr', 'd' ]
console.log("Rødgrød".match(/\b.+?\b/g)); // => [ 'R', 'ø', 'dgr', 'ø', 'd' ]
