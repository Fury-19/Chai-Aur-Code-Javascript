// === -> Strict Equality Check -> It checks for same data type too!!

console.log(2 === '2')

// == -> Normal Equality check -> It only checks for same value not data type!!

console.log(2 == '2')

// Equality check and comparison operators in javascript work differently!! ******IMPORTANT*******

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) // Comparison Operator treats null as 0 so that's why this results in true!!

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// The comparisons like above for null and undefined are avoided in general!!