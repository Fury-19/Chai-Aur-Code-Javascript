setTimeout(function () {
    console.log("fury19!");
}, 2000);

// In place of function in this function we can also pass a reference(not calling a function) of a function defined!

// Example:-
const say = function () {
    document.querySelector('h1').innerHTML = "This the best JS series!!";
};

const changeJS = setTimeout(say, 2000); // Automatically changes the text mentioned in 2 seconds!!
// The function is only passed by reference but not called in any arguments!!

// To abort the function execution of setTimeout like function we need to do something like this :-

// We need to parse the reference of the setTimeout function!

document.querySelector('#stop').addEventListener('click', function (e) {
    clearTimeout (changeJS);
    console.log("Stopped");;
});