// Global and Local Scopes in JS!!

// 3 methods to declare the variables are -> let, vat, const!!

let a = 10 // Declares the variables in local scope only!! -> Used Majorly!!
const b = 20 // Same as let!! -> Also used majorly!!
var c = 30 // Declares the variable in global scope!! -> Not used prominently!!


function one ()
{
    const user = "fury"
    
    function two ()
    {
        const web = "youtube.com"
        console.log(user) // Works properly as the variable user is declared in particular scope!!
    }

    console.log(web) // Doesn't work properly beacuse web is not declared in the particular scope!!

    two ()
}

// one ()

// Similarly scope can be seen in if-else statements!!

// ***************** INTERESTING *****************

// Various method to declare a function!!

addone (5) // Was able to access the function!!

function addone (num)
{
    return num + 1
}

addtwo(5) // Was unable to access the function!!

const addtwo = function(num) // Local Scope!!
{
    return num + 2
}

// These were related to function call, hoisting and execution context!!