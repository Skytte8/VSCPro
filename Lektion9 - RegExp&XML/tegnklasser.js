let str = "The cat's name is Garfield";
console.log(/cat../.exec(str)[0]); // => cat's
console.log(str.match(/cat../)[0]); // => cat's
console.log(/\W. /.exec(str)[0]); // => 's_ (_ ~ space)
console.log(/\s..\s/.exec(str)[0]); // => _is_
