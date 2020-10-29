// opgave2.3.js
function compare(s1, s2) {
    if (s1 < s2)
        return -1;
    else if (s1 > s2)
        return 1;
    else return 0;
}

console.log('compare:');
console.log(compare('abe', 'kat'));
console.log(compare('abe', 'abe'));
console.log(compare('kat', 'abe'));

function compareLen(s1, s2) {
    return compare(s1.length, s2.length);
    // if (s1.length < s2.length)
    //     return -1;
    // else if (s1.length > s2.length)
    //     return 1;
    // else return 0;
}

console.log('comparelen:');
console.log(compareLen('abe', 'abekat'));
console.log(compareLen('abe', 'ABE'));
console.log(compareLen('abekat', 'abe'));

function compareIgnore(s1, s2) {
    return compare(s1.toLowerCase(), s2.toLowerCase());
    // if (s1.toLowerCase() < s2.toLowerCase())
    //     return -1;
    // else if (s1.toLowerCase() > s2.toLowerCase())
    //     return 1;
    // else return 0;
}

// https://en.wikipedia.org/wiki/List_of_Unicode_characters
console.log('compareIgnore:');
console.log(compareIgnore('abe', 'ABE'));
console.log(compare('abe', 'ABE'));

function bubbleSort(array, compare) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compare(array[j], array[j + 1]) > 0) {
            // if (compare(array[j], array[j + 1]) === 1) {
                swap(j,j+1);
            }
        }
    }
    function swap(i,j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
}

let list = ['abe', 'KATTE','abekat','ABE'];
// let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];
console.log('list: ' + list.toString());
bubbleSort(list, compare);
console.log('compare: ' + list.toString());
bubbleSort(list, compareLen);
console.log('compareLen: ' + list.toString());
bubbleSort(list, compareIgnore);
console.log('compareIgnore: ' + list.toString());
