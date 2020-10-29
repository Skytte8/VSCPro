// opgave2.4.js
let tekst = 'en tekst med en gentagelse';
let ord = tekst.split(' ');
let map = {};
console.log(ord);
for (let etOrd of ord) {
    if (etOrd in map)
        map[etOrd]++
    else
        map[etOrd] = 1;
}
console.log(map);