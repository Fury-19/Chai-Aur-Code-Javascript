// Primitive:-) Call By Value!!

// 7 Types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggerIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 232497196348196195631928569184198273n // For Big Numbers JS automatically assigns BigInt Data Type to a variable!!


// Non - Primitive:-) (REFERENCE TYPE)

// Types : Arrays, Objects, Functions

// ARRAYS
const heros = ["Shaktiman", "Naagraj", "Doga"]

// OBJECT
let myObj = {
    name: "Fury_19",
    age: 20,
    weight: 95
}

// FUNCTION
const myFunction = function()
{
    console.log("Hello World");
}

// NOTE: Javascript is a Dynamically typed Language!!