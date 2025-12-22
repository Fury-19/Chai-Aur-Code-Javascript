// Any empty String refers to a false boolean value!
// Any non-empty String refers to a true boolean value!

// Any empty or non-empty Array refers to a true boolean value!

// Falsy values:-
// false, 0, -0, BigInt 0n(is also considered false), "", null, undefined, NaN

// Rest all are truthy values!

// Some of the trivky truthy values are:
// "0", 'false', " ", [], {}, function(){}

// Checking an empty object for truth and false!!

emptyObj = {}

if ((Object.keys(emptyObj)).length === 0)
{
    console.log("Object is empty");
}

// Nullish coalescing Operator (??): null, undefined based study:-

let val1;

val1 = 5 ?? 10 // Took 5 in val1!
console.log(val1);

val1 = null ?? 10 // Avoided null and took 10 in val1!
console.log(val1);

val1 = undefined ?? 15 // Avoided undefined and took 15 in val1!
console.log(val1);
val1 = null ?? undefined // Checks from left to right and gives last value to variable in these type of case!
console.log(val1);

val1 = undefined ?? null // Checks from left to right and gives last value to variable in these type of case!
console.log(val1);


// Since the value is 5, So why don't we avoid using this operator!
// That's beacuse whenever a data is called from a database or using firebase etc.
// then 2 values are accessed, So there are chances of getting null or undefined responses. So, this operator handles
// those type of cases and avoids disturbance in code!


// NOTE -> null coalescing operator and ternary operator are both different!!

// Ternary Operator!!

// Basic Syntax:-
// condintion ? true : false

// Use Case:-

const iceTeaPrice = 100

iceTeaPrice > 50 ? console.log("Greater than 50") : console.log("Less than 50")