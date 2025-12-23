// for - of loop

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

for (const i of arr) {
    console.log(i);
}

const names = "fury"

for (const i of names) {
    console.log(i);
}

// for - each loop in an array:-
ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

ar.forEach((element) => console.log(element)); // Arrow function method:

ar.forEach(function (val) { // Normal function method
    console.log(val);
});

// We can also pass function created in global scope it is not necessary to create a new function every time for using the forEach loop!!
// In forEach loop we also get access to other values too not only array items:

// Example:
arr.forEach((val, idx, ar) => {
    console.log(val, idx, ar);
});

// Maps in JS => Holds Key - Value Pairs:-

const map = new Map(); // Declaration of a Map!

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('RUS', "Russia")

console.log(map);

// Maps contain only unique values and all values are shown in order in which they were inserted!

// Accessing values in map using for - of loop:-
for (const [key, val] of map) {
    console.log(key, "=>", val);
}

// Objects are not iterable like this using for-of() or any other loop!

myObj = {
    name: "Fury19",
    age: 6969,
    weight: 6969,
    gender: "Male"
}

// To iterate the object we can use for - in loop:

for (const key in myObj) {
    console.log(key); // Will output keys!

    console.log(myObj[key]); // Will output values!

    console.log(key, "->", myObj[key]); // Will Output keys and values together:
}

// Iterating an array using for-in() loop:-
for (const i in ar) {
    console.log(i);
}
// But the output generated is not like expected output the output is of keys in datatypes where in array index acted like keys!!
// To get values of keys in array using for-in loop: we need to do this: ar[key]