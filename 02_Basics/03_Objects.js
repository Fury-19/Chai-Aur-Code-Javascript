// Obejct Literals

const mysym = Symbol("myKey1")

const jsUser = {
    name: "fury19",
    "full name": "Nick Fury",
    age: 69,
    location: "Manhatton",
    email: "fury@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Tuesday"],
    [mysym] : "Key1"
    // Can be used as a normal key in an object if we don't use aquare brackets.
    // But on using Square brackets it will be treated as as Symbol!!
}


// Methods to access any data in an object!!
console.log(jsUser.email);
// The keys names given in an object are treated as strings by default!!
// So we can do this too!!
console.log(jsUser["email"]);

console.log(jsUser[mysym])

console.log(typeof mysym)

console.log(jsUser)

// To stop further changes in an object we can use freeze keyword in JS!!
// Object.freeze(jsUser)

jsUser.age = 169 // No Error here but the changes will not appear

console.log(jsUser)

// Adding functions in an object!!

// First unfreeze the object then this below function code will work!!
// But there isn't any unfreeze function so just doing this by commenting out the freeze function implemented above!! 

jsUser.greeting = function()
{
    console.log("Hello JS User");
}

console.log(jsUser.greeting); // Doesn't work properly because of the imporoper fucntion call!!

console.log(jsUser.greeting()); // Proper function call!!

// Function to greet along with name!!
jsUser.greet_name = function()
{
    console.log(`Hey, ${this.name}`);
}

console.log(jsUser.greet_name())