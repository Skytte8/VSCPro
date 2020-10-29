// opgave2.1.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

function max(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        const tal = array[i];
        if (tal > max)
            max = tal;
    }
    return max;
}
console.log(max(list));

function contains(array, element) {
    return array.includes(element);
}
console.log(contains(list, 7));

function sum(array) {
    let sum = 0;
    for (let tal of array)
        sum += tal;
    return sum;
}
console.log(sum(list));