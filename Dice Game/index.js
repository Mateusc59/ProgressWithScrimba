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
 number between 1 and 6. Hint: use Math.floor() and Math.random() */

rollBtn.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1
})
