// specialisering.js
class Person {
    constructor(name) {
        this.name = name;
    }
    toString() { return this.name; }
    equals(p) {
        if (p.constructor.name === "Person" && p.name === this.name) {
            return true;
        }
        return false;
    }
    static compare(p1, p2) {
        if (p1.name > p2.name) {
            return 1;
        }
        if (p1.name < p2.name) {
            return -1;
        } else {
            return 0;
        }
    }
}
class Studerende extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    toString() { return super.toString() + ": " + this.id; };
    equals(s) {
        if (s.constructor.name === "Studerende" && s.name === this.name && s.id === this.id) {
            return true;
        }
        return false;
    }
}

class Kat extends Person {
    constructor(name) { 
        super(name) 
    }
    toString() { return super.toString; };
}

let person = new Person("Viggo");
let studerende = new Studerende("Ida", 123);

let arr = [
    new Studerende("cadsa", 122),
    new Studerende("hsdas", 121),
    new Person("gaasg"),
    new Kat("dasd"),
    new Person("asdas")
]

console.log(person instanceof Person); // => true
console.log(person instanceof Studerende); // => false
console.log(studerende instanceof Person); // => true
console.log(studerende instanceof Studerende); // => true
console.log(person.equals(person))
console.log(Person.compare(person, person))
console.log(studerende.equals(studerende))

arr.sort(Person.compare);
console.log(arr)
