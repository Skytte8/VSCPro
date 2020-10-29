








// bubblesort.js
function bubbleSort(array, compare){
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compare(list[j], list[j + 1]) > 0) {
                [list[j], list[j+1]] = [list[j+1], list[j]]
            }
        }
    }
    return array;
}

let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];
console.log(bubbleSort(list, (m, n) => m-n)); // => [ 0, 1, 2, 4, 7, 8, 9, 13, 16 ]
console.log(bubbleSort(list, (m, n) => n-m)); // => [ 16, 13, 9, 8, 7, 4, 2, 1, 0 ]