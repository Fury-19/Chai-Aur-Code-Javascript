const tinderUser = {}

tinderUser.id = 1
tinderUser.name = "John"
tinderUser.isLoggedIn = false

console.log(tinderUser)

// We can create objects in objects in JS!!
const regularUser = {
    email: "some@google.com",
    fullname: {
        username: {
            firstname: "Nick",
            lastname: "Fury"
        }
    }
}

console.log(regularUser.fullname.username.firstname)
console.log(regularUser)

// Combining Objects!!
const obj1 = {1: "John", 2: "Doe"}
const obj2 = {3: "John", 4: "Doe"}

const obj3 = Object.assign({}, obj1, obj2)
// IMPORTANT -> The above line makes all the objects into the object passed first as the arguments in assign. So, we majorly use an empty object so that all objects gets concatenated into the empty object without modifying the other objects!!

// One more method is by using spread operator
const obj4 = {...obj1, ...obj2}

console.log(obj4)
console.log(obj3)
console.log(obj1)

// We can create an array of objects too!!

console.log(Object.keys(tinderUser)) // Returns array of keys!!
console.log(Object.values(tinderUser)) // Returns array of values!!
console.log(Object.entries(tinderUser)) // Returns array of key value pairs, 1st Part is a key and 2nd is value in array!!

// For example if we want to check if an object has a key or not!!
console.log(tinderUser.hasOwnProperty("name")) // Returns true if the object has the key!!


// Rest all methods need to be studied thorugh MDN or further in course!!