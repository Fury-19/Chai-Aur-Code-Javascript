// Basic function call and declaration!!
function sayMyname()
{
    console.log("F")
    console.log("U")
    console.log("R")
    console.log("Y")
}

sayMyname()

function addTwoNumbers(num1, num2)
{
    console.log(num1 + num2)
}

addTwoNumbers() // Will result in NaN -> Not a Number!!
// Arguments need to be passed!!

addTwoNumbers(3, 4)
addTwoNumbers(3, "4")
addTwoNumbers(3, "a")
addTwoNumbers(3, null)

function addTwoNumbers(num1, num2)
{
    let result = num1 + num2
    return result
}

const ans = addTwoNumbers(3, 4)

console.log("Result:", ans)

function loginUserMessage(username)
{
    return `${username} just logged in`
}

console.log(loginUserMessage("Fury"))

// If no value passed then undefined return value not null!!
console.log(loginUserMessage())

// To avoid this undefined behaviour we can either use default arguments or if else statements to encounter the problem!!


// For example we need to calculate the total cart price where the number of arguments are not fixed!!

// We can do this to handle any number of inputs in a function!!
function calCartPrice(...price) // Using rest operator!!
{
    let sum = 0;
    for (x in price) sum += x;
    return sum;
}

// *********** OR ***********

function calPrice () // Old Way (Not Recommended) !!
{
    let sum = 0;
    for (x in arguments) sum += x;
    return sum;
}

// Modern Shorter Way ES6+
const addCartPrice = (...price) => price.reduce((a , b) => (a + b), 0) // Using reduce function to add prices!!


// We can also pass objects in functions!!
user = {
    username: "Fury19",
    price: "You can't Buy!!"
}

// We need to use if else statements for input validation in this method for correct function behaviour!!
function ufunc (item)
{
    console.log(`Username: ${item.username} and price: ${item.price}`)
}

// Function Calling:
// 1.
ufunc (user)

// 2.
ufunc ({
    username: "Nick",
    price: "2 Cents"
})

// Funcitons with arrays as parameters!!

const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function retSecVal (ar)
{
    return ar[1]
}

// Function calls can be made similarly as objects!!

// Parameters can be passed in variable format and direct too!!