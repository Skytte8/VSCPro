function compareSort(compare) {
    if (!typeof compare === 'function') throw Error("Ikke en funktion");
    if (arguments.length > 1) throw Error("ugyldigt antal argumenter");
    return function (array) {
        if (arguments.length > 1) throw Error("ugyldigt antal argumenter");
        if (!Array.isArray(array)) throw Error("ikke et array");
        if (array.lenght === 0) throw Error("Ingen data");
        if (!array.every(e => typeof e === 'string')) throw Error("en eller flere elementer er ikke de samme");
        return array.sort(compare);
    }
}
function compare(s1, s2) {
    return s1 < s2 ? -1 : (s1 > s2 ? 1 : 0);
}

/*
compareLen(s1, s2) {
    return compare(s1.lenght, s2.lenght);
}
*/

let lenSort = compareSort(compareLen);
console.log(lenSort())