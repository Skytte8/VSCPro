// opgave2.6.js
let kode = `function swap(i,j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}`;

let stak = [];

let parenteser = {
    ')': '(',
    ']': '[',
    '}': '{'
};

let balanceret = true;

for (let i = 0; i < kode.length; i++) {
    const tegn = kode[i];
    if (Object.values(parenteser).includes(tegn)) {
        stak.push(tegn);
    }
    else if (tegn in parenteser && parenteser[tegn] !== stak.pop()) {
        balanceret = false;
        console.log(`Fejl i position ${i} med '${tegn}'`);
        break;
    }
}
if (stak.length !== 0) {
    balanceret = false;
    console.log('Fejl - stak er ikke tom:', stak);
}
if (balanceret) console.log('Balanceret');