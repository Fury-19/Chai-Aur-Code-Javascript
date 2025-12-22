// for loop:-

// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
// }

// We can iterate an array too with loops and access various values at various indexes!!

// Break statement are used to step out of a loop and skip further iterating of code in loop.

// Continue Statement is used to skip current iteration's further execution of code in loop.

// Use case of break:
console.log("Use Case of Break:-");

for (let i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        console.log("Detected 5");
        break;
    }
    console.log(`The Value of i is : ${i}`)
}

// Use case of continue:
console.log("Use Case of Continue:-");

for (let i = 1; i <= 10; i++)
{
    if (i == 5)
    {
        console.log("5 is Skipped");
        continue
    }
    console.log(`The Value of i is : ${i}`)
}

// while() & do-while() loops:-

// Both have similar syntax and working as while and do while loops in cpp!!

// One important thing is that in do - while loop the code in loop gets executed atleast 'once'!!
// Beacuse in while loop the condition gets checked first then loop executes.
// But in do-while() loop the condition checks after atleast one iteration.