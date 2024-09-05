const incrementButton = document.getElementById('increment')
const decrementButton = document.getElementById('decrement')
const resetButton = document.getElementById('reset')
const answer = document.getElementById('answer')

incrementButton.addEventListener('click', function(){
    const value = Number(answer.innerText)
    if (value >= 10) {
        alert("10+ value is not allowed")
    } else {
        answer.innerText = value + 1
    }
})

decrementButton.addEventListener('click', function(){
    const value = Number(answer.innerText)
    if (value > 0) {
        answer.innerText = value - 1
    } else {
        alert("Negative value is not allowed")
    }
})

resetButton.addEventListener('click', function(){
    answer.innerText = 0
})