// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = false

// Create variables to store references to the necessary DOM nodes


const message = document.getElementById('message')
const player1ScoreBoard = document.getElementById('player1Scoreboard')
const player2ScoreBoard = document.getElementById('player2Scoreboard')

const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')


const rollDiceBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')


/* Hook up a click event listener to the Roll Dice Button. Log out a random

rollBtn.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1
  // 1. Find out which players turn it is
  // 2. log out the value e.g. "Player 1 rolled 5"

  if (player1Turn === true){
     console.log (` player 1 rolled ${randomNumber} `)
  }else{
  console.log(` player 1 rolled ${randomNumber} `)

  }
  // 3. Switch the turn back to the other player

  player1Turn = !player1Turn
})


 number between 1 and 6. Hint: use Math.floor() and Math.random() */


// 1. Display the dice number instead of logging it out
// 2. Use the 'active' class to show which player's turn it is
// Hint: use the .classList.remove() and classList.add() methods
// 3. Update the "message" DOM node so that it states who's turn it is



rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1


  // 1. Display the dice number instead of logging it out
  // 2. Use the 'active' class to show which player's turn it is
  // Hint: use the .classList.remove() and classList.add() methods
  // 3. Update the "message" DOM node so that it states who's turn it is
  if(player1Turn) {
    player1Score += randomNumber
    player1Scoreboard.textContent = player1Score
    player1Dice.textContent = randomNumber
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")
    message.textContent = "Player 2 Turn"
  } else {
    player2Score += randomNumber
    player2Scoreboard.textContent = player2Score
    player2Dice.textContent = randomNumber
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    message.textContent = "Player 1 Turn"
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 has won! 🥳"
    winnerbtn()
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! 🎉"
    winnerbtn()
  }

  player1Turn = !player1Turn
})


function winnerbtn() {
  rollBtn.style.display = "none"
  resetBtn.style.display = "block"
}

function reset() {
  player1Scoreboard.textContent = 0
  player2Scoreboard.textContent = 0
  message.textContent = "Player 1 Turn"
  player1Dice.textContent = "-"
  player2Dice.textContent = "-"
  player1Score = 0
  player2Score = 0
  console.log(player1Score)
  rollBtn.style.display = "block"
  resetBtn.style.display = "none"
  player2Dice.classList.remove("active")
  player1Dice.classList.add("active")
}

resetBtn.addEventListener('click', function () {
  reset()
  console.log(reset())
})
