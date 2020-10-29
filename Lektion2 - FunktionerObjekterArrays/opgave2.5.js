// opgave2.5.js
let person0 = {navn: 'Viggo', 'e-mail': 'viggo@mail.dk', mobilnummer: 12345678}
let person1 = {navn: 'Ida', 'e-mail': 'ida@mail.dk', mobilnummer: 23456789}
let personer = [person0, person1];
console.log(personer);
let person2 = {navn: 'Ole', 'e-mail': 'ole@mail.dk', mobilnummer: 34567890}
personer[2] = person2;
console.log(personer);
console.log(personer[1]);
let person1ny = {navn: 'Ida1', 'e-mail': 'ida1@mail.dk', mobilnummer: 23456789}
personer[1] = person1ny;
console.log(personer);
delete personer[0];
console.log(personer);