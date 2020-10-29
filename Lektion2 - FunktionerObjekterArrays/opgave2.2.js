// opgave2.2.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

function bubbleSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
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

bubbleSort(list);
console.log('bubbleSort: ' + list.toString()); // => 0,1,2,4,7,8,9,13,16

function binarySearch(array, element) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let middle = parseInt((left + right) / 2);
        let k = array[middle];
        if (k == element) {
            return middle;
        }
        if (k > element)
            right = middle - 1;
        else
            left = middle + 1;
    }
    return -1;
}

let target = 4;
let position = binarySearch(list, target);
console.log('target: ' + target);
console.log('position: ' + position);