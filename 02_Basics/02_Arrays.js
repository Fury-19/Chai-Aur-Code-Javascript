const marvel = ["Thor", "IronMan", "SpiderMan"]

const dc = ["SuperMan", "Flash", "Batman"]

marvel.push(dc) // Creates another array in an array like 2d arrays!!

console.log(marvel);

console.log(marvel[3][1]);


marvel.pop();

const allhero = marvel.concat(dc);

console.log(allhero);

// Another method to concatenate the Arrays. => Spread Operator!!!
const allnewhero = [...marvel, ...dc]

console.log(allnewhero);

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realarr = arr.flat(Infinity)

console.log(realarr);


console.log(Array.isArray("fury19")); // Checks if argument passed is an array or not!!

console.log(Array.from("fury19")); // Converts an data type into an array!!

// If we pass an object as argument then we need to specify which part to convert either key or value into an array!!
console.log(Array.from({name: "fury19"}));

let scr1 = 100
let scr2 = 200
let scr3 = 300

console.log(Array.of(scr1, scr2, scr3)); // Makes array of given arguments!!