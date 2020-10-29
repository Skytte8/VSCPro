// validering.js
function max(...elementer) {
    if (elementer.length === 0) throw Error('Ingen data');
    let type = typeof elementer[0];
    if (type !== 'number' && type !== 'string') throw Error('Forkert type');
    if (!elementer.every(e => typeof e === type)) throw Error('Ej samme type');
    if (type === 'number')
        return elementer.reduce((a, e) => a > e ? a : e);
    else  // type == 'string'
        return elementer.reduce((a, e) => a.localeCompare(e) > 0 ? a : e);
}

console.log(max(1, 3, 2)); // => 3
console.log(max('A', 'b', 'C')); // => C
console.log(max('x')); // => x
console.log(max()); // => Error: Ingen data
console.log(max(max, null)); // => Error: Forkert type
console.log(max(1, 'tre', 2)); // => Error: Ej samme type