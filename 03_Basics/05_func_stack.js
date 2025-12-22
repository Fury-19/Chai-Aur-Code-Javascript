// Function Call Stack

// Javascript Execution Contexts:-

// Global Execution Context
// Function Execution Context
// Eval Execution Context

// A code in JS runs in two phases:- (Below given parts in order)
// 1: -> Memory Creation Phase => Memory allocation to be done only
// 2: -> Execution Phase => 

// Example:

let val1 = 10
let val2 = 5

function add(v1, v2)
{
    let ttl = v1 + v2;
    return ttl
}

let r1 = add(val1, val2)
let r2 = add(10, 2)

// The code will go through the following process in order as given:
// 1: Global Execution phase will happen first:-
        // First all the code will get allocated into 'this' keyword in global context.
// 2: Memory Creation Phase will happen second:-
        // All the variables will be taken together and assigned undefined in this phase.
        // The function's definition (inner block of code of function) will also get stored in memory phase.
        // After the function's definitions are gone through the r1, r2 variables will also get undefined.
// 3: Execution Phase will happen now:-
        // The variables before function will get their values.
        // Nothing to execute in function, So continue further.
        // Now there will be execution in lines of r1 and r2.
        // Everytime the function gets called a New Execution Context Box is created and also deleted after use which consist of:-
            // 1. New Variable Environment.
            // 2. Execution Thread.
        // Now for every new Execution Context or Function call subprocesses of Memory Phase and Execution Phase will occur again for subparts.
        // For Example in r1 line the function call gets through following phases:
            // In Memory Phase:-
                // The variables v1, v2, ttl will get undefined.
            // In execution Phase:-
                // The mathematical operations and values will be performed and allocated to respective paths.
        // The values from Function will be returned to Global Context.

// Function Call Stacking:-
// Every time a function gets called it gets pushed into an stack(LIFO) if there are function inside a function they also gets pushed into stack.
// As soon as a function(Top most in stack) gets executed it gets popped out of stack and the so onn....