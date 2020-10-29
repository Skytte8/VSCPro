let str = "The cat's name is Garfield";
console.log(/cat|dog/.test(str)); // => true
let matched = /^(\w+).+?(\w+)$/.exec(str);
console.log(matched[0]); // => The cat's name is Garfield
console.log(matched[1]); // => The
console.log(matched[2]); // => Garfield
