let score = 33

// Number Data Type:-
console.log(typeof(score))

// Conversion to String Data type from Number:-
score = String(score)

// Converted to String Data type:-
console.log(typeof(score))

let str = "33abc"

console.log(typeof(str))

str = Number(str)

console.log(typeof(str))

// As str previously contained characters so it cannot be changed to Number Data type!!
console.log(str) // This will output NaN => Not A Number!!

let possible = true

console.log(typeof possible)
console.log(possible)

possible = Number(possible)

console.log(typeof possible);
console.log(possible)

let done = -1;

console.log(done);

// Any Number (Positive or Negative) will result in a true on conversion to Boolean!!
done = Boolean(done)
console.log(typeof done)
console.log(done);

done = Number(done)
console.log(typeof done)
console.log(done);

console.log(Boolean("")) // Empty strings result in false!!
console.log(Boolean(" ")) // Non - Empty strings result in true!!