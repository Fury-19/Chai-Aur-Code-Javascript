const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh Choudhary"
}

// We can modify the keys names of the object!!
// Instead of doing (course.) again and again we can make any key name concise by following method:-

const {courseInstructor} = course
// Now we can use courseInstructor instead of course.courseInstructor!!

const {courseInstructor: instructor} = course
// Now we can use instructor instead of course.courseInstructor!!

// The above explaination is called destructuring of objects!!

console.log(instructor)

// API's in JS fetch data in JSON format!!

// JSON format is as follows:-
// In proper JSON format keys are declared in double quotes!!

// {
//     "name": "Hitesh Choudhary",
//     "course": "JS in Hindi",
//     "fee": "999"
// }

// API's can also get Data in terms of array of objects!!
[
    {},
    {},
    {}
]

// JSON -> Javascript Object Notation!!
// Similar type of API data is fetched in all other laguages like Ruby, PHP, Java etc!!