let str = "The cat's name is Garfield";
console.log(str.replace(/[ ']/, "-")); // => The-cat's name is Garfield
console.log(str.replace(/[ ']/g, "-")); // => The-cat-s-name-is-Garfield
console.log(str.replace(/^(\w+)(.+?)(\w+)$/, "$3$2$1")); // => Garfield cat's name is The
console.log(str.split(/ /)); // => [ 'The', "cat's", 'name', 'is', 'Garfield' ]