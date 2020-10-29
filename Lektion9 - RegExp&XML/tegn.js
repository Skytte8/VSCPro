let str = "The cat's name is Garfield";
console.log(/cat/.test(str)); // => true
console.log(str.search(/cat/)); // => 4
console.log(str.search("cat")); // => 4
console.log(str.search(/[set]/)); // => 2
console.log(str.search(/[e-t]/)); // => 1
