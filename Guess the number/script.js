let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#button")
const userInput = document.querySelector("#input")
const startOver = document.querySelector(".result")
const guessSlot = document.querySelector("#guesses")
const remaining = document.querySelector("#remaining")
const lowOrHi = document.querySelector(".lowOrHi")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Enter the valid input')
    }else if(guess < 1){
        alert('Enter the number greater than 0')
    }else if(guess > 100){
        alert('Enter the number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random number is ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You guessed it right')
    }else if(guess > randomNumber){
        displayMessage('Number is too high')
    }else if(guess < randomNumber){
        displayMessage('Number is too low')
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        userInput.value = ''
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        prevGuess = []
        numGuess = 1
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}