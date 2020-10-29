let str = "The cat's name is Garfield";
console.log(/cat.+s/.exec(str)[0]); // => cat's name is
console.log(/cat.+?s/.exec(str)[0]); // => cat's
console.log(/cat?/.exec(str)[0]); // => cat
console.log(/cat??/.exec(str)[0]); // => ca
