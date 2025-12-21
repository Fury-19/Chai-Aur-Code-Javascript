// IIFE => Immediately Invoked Function Expressions!!
// It is used to avoid the polution from global scope!!

// The IIFE form for functions can be defined as:-
// Wrap the function in parenthesis and also add a pair of parenthesis after the function wrapped in parenthesis!!

// Example:-
// (function {
// 
// })()

// The second parenthesis acts as a call to function!!

(function chai() // This is a named IIFE
{
    console.log(`DB CONNECTED`);
})();

// In this above defined function no role of global scope variables!!


// In IIFE we can also use arrow functions as follows:-

((name) => { // This is a without named IIFE
    console.log(`DB CONNECTED TO ${name}`)
})('SERVER');

// IMPORTANT NOTE : In IIFE functions we need to add a semicolon necessarily after function calling parenthesis!!