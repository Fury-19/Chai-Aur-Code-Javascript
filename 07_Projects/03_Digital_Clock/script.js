const clock = document.getElementById('clock');
// Query Selector can also be used!!

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);