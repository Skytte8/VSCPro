let str = "The cat's name is Garfield";
console.log(str.match(/[a-zA-Z]{4,}/g));
// => [ 'name', 'Garfield' ]
let regex = /[a-z]{4,}/gi;
let matched;
while ((matched = regex.exec(str)) !== null){
    console.log(matched[0]);
}
// => name
// => Garfield
