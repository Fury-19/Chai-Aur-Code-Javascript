const myArr = [0, 1, 2, 3, 4]


// Other method to declare an array!!
const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7) // No Square brackets needed!!

console.log(myArr2.length);

// Array Methods:-)

myArr.push(5)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(0)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr);

// Will output -1 if index not found else it will give index as output!!
console.log(myArr.indexOf(9));

const newArr = myArr.join();

console.log(typeof newArr);
console.log(newArr);
console.log(myArr);

// Slice and Splice Method read from MDN!!