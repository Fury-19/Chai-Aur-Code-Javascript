let randNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lowORHi = document.querySelector('.lowOrHigh');
const remGuess = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame)
{
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess (guess)
{
    if (isNaN(guess))
    {
        alert('Please enter a Valid Number!');
    }
    else if (guess < 1)
    {
        alert('Please enter a number greater than 1!');
    }
    else if (guess > 100)
    {
        alert ('Please enter a number less than 100!');
    }
    else
    {
        prevGuess.push(guess);
        if (numGuess === 11)
        {
            dispGuess(guess);
            dispMsg(`Game Over! Random Number was : ${randNum}`);
            endGame();
        }
        else
        {
            dispGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess (guess)
{
    if (guess < randNum)
    {
        dispMsg(`Your Guess is lower than expected Number!!`);
    }
    else if (guess > randNum)
    {
        dispMsg(`Your Guess is higher than expected Number!!`);
    }
    else
    {
        dispMsg(`You Guessed it right!!`);
        endGame();
    }
}

function dispGuess (guess)
{
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remGuess.innerHTML = `${11 - numGuess}`;
}

function dispMsg (message)
{
    lowORHi.innerHTML = `<h2>${message}</h2>`
}

function endGame ()
{
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    playGame = false;
    p.classList.add('button');
    p.innerHTML = `<h2 id="newG">Start New Game</h2>`;
    startOver.appendChild(p);
    newGame();
}

function newGame ()
{
    const newGameButton = document.querySelector('#newG');
    newGameButton.addEventListener('click', function (e) {
        numGuess = 1;
        prevGuess = [];
        let randNum = parseInt(Math.random() * 100 + 1);
        guessSlot.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        remGuess.innerHTML = `${11 - numGuess}`;
        lowORHi.innerHTML = ''
        playGame = true;
    })
}