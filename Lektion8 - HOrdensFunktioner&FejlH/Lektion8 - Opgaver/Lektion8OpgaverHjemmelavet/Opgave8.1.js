let person1 = {name:"Skytte", nr:31351709, age:21}; 
let person2 = {name:"Anton", nr:23123123, age:40}; 
let person3 = {name:"Ida", nr:696969, age: 19}; 

let arr = [person1, person2, person3];

// find tlf nr
console.log(arr.find(p => p.nr === 31351709));

// find mindste alder
let found = arr.reduce((accumulator, element) => accumulator < element.age ? accumulator : element.age, 100);
console.log(found);

// Personer får ID
let idCounter = 0;
let newPersons = arr.map(element => element.id = idCounter++);
console.log(arr);

// Personer i string
let names = arr.map(element => element.name).sort();
const reducer = (accumulator, currentValue) => accumulator + ', ' + currentValue;
let namesAsString = names.reduce(reducer);
console.log(namesAsString);

// Array yngre end 30
let personsYThan30 = arr.filter(element => element.age < 30);
personsYThan30 = personsYThan30.map(element => {return {name : element.name, nr : element.nr}});
console.log(personsYThan30);