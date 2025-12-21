const user = {
    username: "fury",
    price: 999,

    welcomeMsg: function()
    {
        console.log(`Hey ${this.username}, welcome to the object.`) // In this line current context for 'this' keyword is the current object!!
        console.log(this) // Here 'This' refers to current context which is current object!!
    }
}

user.welcomeMsg()

console.log(this) // Here 'this' refers to the current context where this refers to an empty object!!
// The behaviour of 'this' is only like this in node environment but not similar in browser environment!!
// In Browser 'this' refers to window object!!


function chai()
{
    let username = "fury"
    
    console.log(this)
    
    console.log(this.username)
    // Doesn't work properly because 'this' works in object only like this but in function 'this' gives undefined!!
}

chai()

// Similar behaviour for the function declaration of other type also using const!!

// Arrow function declaration!!

const code = () => {
    let username = "fury"
    console.log(this.username)
}

code() // Also results in undefined!!

// We can write arrow function in two forms:-
// 1: Implicit return Form
// 2: Explicit return Form

// IMPLICIT => In this form we need not to mention the return statement for returning any value of function as output!!
// ************** OR **************
// We can also do it normally as below and also via wrapping the code in parenthesis!!

const addnums = (num1, num2) => num1 + num2
const addnum = (num1, num2) => (num1 + num2)

console.log(addnums(1, 2))
console.log(addnum(3, 4))

// EXPLICIT => In this form we wrap the code between two curly braces and give a return value!!


// Note:->
// If we wrap the code in curly braces we need to mention the return statement but if we
// wrap the code into parenthesis we don't need to mention return statement!!

// If we want to return an object :-

const func = (num1, num2) => {username: "hitesh"}

console.log(func()) // Gives undefined behaviour beacuse of paranthesis not written no return statemet

const func2 = (num1, num2) => ({username: "hitesh"}) // Now it will work properly!!

console.log(func2()) // Gives object as output once putted in paranthesis!!

// We can also use arrow functions in loops like forEach etc. on arrays!!