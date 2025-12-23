// The for - each loop doesn't return any values and even if we return explicitly still it doesn't work!!

const langs = ["js", "ruby", "java", "python", "cpp"]

// In JS to get some values from any data we need to use some different type of functions!!

// For Example if we want to get values greater than 4 from an array we can use filter to do so:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = arr.filter((num) => num > 4) // Gets all values greater than 4 from the arrray = arr

// Do remember that in arrow function if we use arrow function then we need to explicitly return the value we demand.

// Example:
const newNum = arr.filter((num) => {
    if (num > 4)
        return num
})

console.log(newNums);
console.log(newNum);

// If we still want to use the values by forEach method then we need to store the values in some entity in parallel!!

const result = []

arr.forEach( (num) => {
    if (num > 4)
        result.push(num) // Storing the values in an array!!
} )

console.log(result);


// Implementation of filter() on objects:-

const books = [
  {
    name: "Sapiens",
    genre: "history",
    publishYear: 2011,
    editionYear: 2022
  },
  {
    name: "A Brief History of Time",
    genre: "science",
    publishYear: 1988,
    editionYear: 2018
  },
  {
    name: "1984",
    genre: "fiction",
    publishYear: 1949,
    editionYear: 2021
  },
  {
    name: "Atomic Habits",
    genre: "non-fiction",
    publishYear: 2018,
    editionYear: 2023
  },
  {
    name: "Guns, Germs, and Steel",
    genre: "history",
    publishYear: 1997,
    editionYear: 2019
  },
  {
    name: "The Selfish Gene",
    genre: "science",
    publishYear: 1976,
    editionYear: 2016
  },
  {
    name: "The Hobbit",
    genre: "fiction",
    publishYear: 1937,
    editionYear: 2020
  },
  {
    name: "Educated",
    genre: "non-fiction",
    publishYear: 2018,
    editionYear: 2022
  },
  {
    name: "The Silk Roads",
    genre: "history",
    publishYear: 2015,
    editionYear: 2021
  },
  {
    name: "Dune",
    genre: "fiction",
    publishYear: 1965,
    editionYear: 2023
  }
];

let reqBooks = books.filter( (bk) => bk.genre === "history" )

console.log(reqBooks);


// Use of map() in JS:

// The concept of returning values also applies here same as arrow function concept(i.e. if we create a scope we need to explicitly return the value)!
// Otherwise we can use paranthesis to return in a single line or return directly!!

const newNumbers = arr.map( (num) => {return num + 10} );
console.log(newNumbers);


// We can also nest the map() and filter() functions for complex operations!!

// Reduce() Function:-

// Basic use case is to perform any kind of operation on an complete array (eg: Adding prices of a cart)

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const cartTotal = arr.reduce( (acc, currVal) => {
    return acc + currVal
}, 0 ) // This 0 at last indicates the intital value of the accumulator (acc here in this code)!!

console.log(cartTotal);


// We can also trim this code to a single line using normal arrow function:
const ttl = arr.reduce( (acc, curVal) => (acc + curVal), 0 )

console.log(ttl);


// We can also use reduce on objects for some operation!!