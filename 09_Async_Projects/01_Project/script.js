const hexVal = "0123456789ABCDEF";

const randColor = function () {
    color = "#";
    for (let i = 0; i < 6; i++)
    {
        color += hexVal[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId; // Taking declaration here because of the use of interval id in other function!!
const startColorChange = function () {
    if (!intervalId)
    {
        intervalId = setInterval(function () {
            document.body.style.backgroundColor = randColor();
        }, 1000);
    }
}

const stopColorChange = function () {
    clearInterval(intervalId);
    intervalId = null; // Just a bit optimization!
}

document.querySelector('.start').addEventListener('click', startColorChange);

document.querySelector('.stop').addEventListener('click', stopColorChange);