// This file is entirely realted to a interview question!!

// Q: Can we change value of pi from 3.14... to any other real number?

const descripter = Object.getOwnPropertyDescriptor(Math, "PI"); // We can't write values because the property writable for Math.PI is set to false!!

console.log(descripter);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}