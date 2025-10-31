let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// There are many other type of method like above which convert date to different type!!

console.log(typeof myDate); // Important!!

let myCreatedDate = new Date(2023, 0, 23) // We can add further more values for time -(Hours, Minutes, Seconds)!!

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3) // We can add further more values for time -(Hours, Minutes, Seconds)!!

console.log(myCreatedDate.toDateString()); // Months start with 0 in Javascript!!

console.log(myCreatedDate2.toLocaleString());

// One More method to declare dates is as follows:-)

let newDate = new Date("2023-01-14") // Here 0 based naming of months is not used!! ->[yyyy-mm-dd] Format Used here
console.log(newDate.toLocaleString());

// Using [mm-dd-yyyy] format:-) {Preferred more}
newDate = new Date("01-14-2023")
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);


console.log(newDate.getTime());

console.log(Math.floor(Date.now() / 1000));


// Important Method!!
newDate.toLocaleString('default', {
    weekday: "long"
})