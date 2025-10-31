// ************************************************************** NUMBER **************************************************************
const score = 400

console.log(score);

const bal = new Number(100)
console.log(bal);

console.log(bal.toString().length)
console.log(bal.toFixed(1));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000

console.log(hundreds.toLocaleString('en-IN'));

// ************************************************************** MATHS **************************************************************

console.log(Math);

// Absolute Function!!
console.log(Math.abs(4));
console.log(Math.abs(-4));

// Round Function!!
console.log(Math.round(4.8));
console.log(Math.round(-4.8));
console.log(Math.round(4.5));

// Ceil And Floor Functions!!
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

console.log(Math.random()); // Gives a number between 0 and 1 !!

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min));

