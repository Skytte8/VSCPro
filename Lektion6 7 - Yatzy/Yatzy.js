let hold = [false, false, false, false, false]; // Hold denne tur
let dice = [0, 0, 0, 0, 0]; //
let billeder = document.querySelectorAll("img");

let turn = 0;
let selected = null;
let savedScores = new Array(15);
savedScores.fill(false); // fylder savedScores med false

// finder alle inputs med class= input
let inputs = document.querySelectorAll(".input");
let inputarr = Array.from(inputs);

// giver alle inputs onclick function
for (let i of inputs) {
  i.onclick = selection;
}
// giver alle terninger onclick function
for (let b of billeder) {
  b.onclick = holdDice;
}

// starter spillet med et roll
roll();

// resetter turen
function reset() {
  turn = 0;
  hold = [false, false, false, false, false];
  dice = [0, 0, 0, 0, 0];
  for (let b of billeder) {
    b.setAttribute("data-held", "false");
    b.style.backgroundColor = null;
  }
  roll();
}
// resetter spillet
function resetGame() {
  let c = confirm("Spillet er slut.\nDu fik: " + document.querySelector("#id-total").value + " points.\nSpil igen?");
  if (c == true) {
    savedScores.fill(false);
    selected = null;
    for (let j of document.querySelectorAll("input")) {
      j.style.backgroundColor = null;
      j.value = "";
    }
    turn = 1;
    hold = [false, false, false, false, false];
    dice = [
      Math.ceil(Math.random() * 6),
      Math.ceil(Math.random() * 6),
      Math.ceil(Math.random() * 6),
      Math.ceil(Math.random() * 6),
      Math.ceil(Math.random() * 6),
    ];
    let liste = document.querySelectorAll("img");
    for (let j = 0; j < 5; j++) {
      liste[j].src = "Dice" + dice[j] + ".png";
      liste[j].alt = dice[j];
    }
    for (let b of billeder) {
      b.setAttribute("data-held", "false");
      b.style.backgroundColor = "white";
    }
    getResult();
  }
}

function testDone() {
  for (let i of savedScores) {
    if (i === false) {
      return;
    }
  }
  console.log("resetting");
  resetGame();
}

// ruller med terningerne
function roll() {
  if (selected != null) {
    savedScores[inputarr.indexOf(selected)] = selected.value;
    selected.style.backgroundColor = "grey";
    selected = null;
    reset();
    return;
  }
  if (turn < 3) {
    for (let i = 0; i < hold.length; i++) {
      if (hold[i] == true) {
        billeder[i].setAttribute("data-held", "true");
      }
    }
    for (let i = 0; i < dice.length; i++) {
      if (hold[i] === false) {
        dice[i] = Math.ceil(Math.random() * 6);
      }
    }
    let liste = document.querySelectorAll("img");
    for (let j = 0; j < 5; j++) {
      liste[j].src = "Dice" + dice[j] + ".png";
      liste[j].alt = dice[j];
    }

    console.log(dice);
    let total = document.querySelector("#total");
    let ojne = dice.reduce(function (a, b) {
      return a + b;
    }, 0);

    turn++;
    document.querySelector("#turn").innerHTML = "Turn: " + turn;
  }

  testDone();
  getResult();
}

document.querySelector("button").onclick = roll;

function holdDice(event) {
  let i = this.id;
  if (turn > 0) {
    if (event.target.getAttribute("data-held") === "false") {
      hold[i] = !hold[i];
      if (hold[i]) {
        event.target.style.backgroundColor = "blue";
      } else {
        event.target.style.backgroundColor = null;
      }
    }
  }
}

// finder den seneste valgte input og markerer den
function selection() {
  let oldSelected = selected;
  let index = inputarr.indexOf(this);
  if (savedScores[index] !== false) {
    console.log("allerede valgt");
    return;
  }
  if (oldSelected != null) {
    oldSelected.style.backgroundColor = null;
  }
  selected = this;
  this.style.backgroundColor = "hotpink";
}

// samlet function til udregning af alle scores og putter dem i inputs
function getResult() {
  let arr = new Array(18);
  for (let i = 1; i <= 6; i++) {
    arr[i - 1] = sameValue(i);
  }

  arr[6] = onePair();
  arr[7] = twoPair();
  arr[8] = threeSame();
  arr[9] = fourSame();
  arr[10] = fullHouse();
  arr[11] = smallStraight();
  arr[12] = largeStraight();
  arr[13] = chance();
  arr[14] = yatzy();
  let sum = 0;
  for (let s = 0; s <= 5; s++) {
    sum += Number(savedScores[s]);
  }
  arr[15] = sum;
  if (sum >= 63) {
    arr[16] = 50;
  } else {
    arr[16] = 0;
  }
  let total = 0;
  for (let t of savedScores) {
    total += Number(t);
  }
  arr[17] = total + parseInt(arr[16]);

  for (let j = 0; j < inputs.length; j++) {
    if (savedScores[j] === false) {
      inputs[j].value = arr[j];
    }
  }
  let sumfield = document.querySelector("#id-sum");
  sumfield.value = arr[15];
  document.querySelector("#id-bonus").value = arr[16];
  document.querySelector("#id-total").value = arr[17];
}

function frequency() {
  let freq = [0, 0, 0, 0, 0, 0, 0];

  for (let index = 0; index < freq.length; index++) {
    let temp = 0;
    dice.forEach((element) => {
      if (element === index) {
        temp++;
      }
    });
    freq[index] = temp;
  }

  return freq;
}

function sameValue(value) {
  let x = 0;
  dice.forEach((element) => {
    if (element === value) {
      x += value;
    }
  });
  return x;
}

function onePair() {
  let x = 0;
  let freq = frequency();

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] >= 2 && i * 2 > x) {
      x = i * 2;
    }
  }
  return x;
}

function twoPair() {
  let x = 0;
  let y = 0;
  let freq = frequency();
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] >= 2) {
      y++;
    }
  }

  if (y < 2) {
    return 0;
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] >= 2) {
      x += i * 2;
    }
  }
  return x;
}

function threeSame() {
  let x = 0;
  let freq = frequency();

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] >= 3) {
      x = i * 3;
    }
  }
  return x;
}
function fourSame() {
  let x = 0;
  let freq = frequency();

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] >= 4) {
      x = i * 4;
    }
  }
  return x;
}

function fullHouse() {
  let x = 0;
  let y = 0;
  let a = 0;
  let freq = frequency();
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] === 3) {
      x = i * 3;
      y++;
    }
  }
  if (y < 1) {
    return 0;
  }
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] === 2) {
      x += i * 2;
      a++;
    }
  }
  if (a < 1) {
    return 0;
  }
  return x;
}

function smallStraight() {
  let freq = frequency();
  if (frequency()[6] > 0) {
    return 0;
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] > 1) {
      return 0;
    }
  }
  return 15;
}

function largeStraight() {
  let freq = frequency();
  if (freq[1] > 0) {
    return 0;
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] > 1) {
      return 0;
    }
  }
  return 20;
}

function chance() {
  let sum = 0;
  dice.forEach((element) => {
    sum += element;
  });

  return sum;
}

function yatzy() {
  let x = 0;

  for (let i = 1; i < frequency().length; i++) {
    if (frequency()[i] >= 5) {
      x = 50;
    }
  }
  return x;
}
