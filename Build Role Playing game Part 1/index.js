/*
CHALLENGE
1. Strip out the hero and monster data (element id, name, avatar,
health and dice score) and store them in variables

2. Write a renderCharacter() function that accepts the 5 new variables
as paramaters and renders out a character with this data

3. Call renderCharacter() twice. Once with the hero variables and
once with the monster variables to that both are rendered

let HeroElementId = "hero"
let HeroName = "wizard"
let HeroAvatar = "images/wizard.png"
let HeroHealth = 6
let HeroDiceScore = 6

let MonsterElementId = "monster"
let MonsterName = "orc"
let MonsterAvatar = "images/orc.png"
let MonsterHealth = 10
let MonsterDiceScore = 4

function renderCharacter(elementid, name, avatar, health, dice) {
  document.getElementById(elementid).innerHTML =
    `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container"><div class="dice"> ${dice} </div></div>
    </div>`;
}

console.log(renderCharacter(HeroElementId, HeroName, HeroAvatar, HeroHealth, HeroDiceScore))
console.log(renderCharacter(MonsterElementId, MonsterName, MonsterAvatar, MonsterHealth, MonsterDiceScore))


const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceRoll: [3, 1, 4],
  diceCount: 3
}

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceRoll: [2],
  diceCount: 1
}

function renderCharacter(data) {
  const { elementId, name, avatar, health, diceRoll, diceCount } = data;
  let diceHtml = '';

  // CHALLENGE
  // Update this for loop so it uses a value from the
  // new diceRoll array to render out the dice so the
  // wizard's dice have values of 3, 1 and 4, and the
  // orc's single dice has a value of 2.


  for (let i = 0; i < diceRoll.length; i++) {
    diceHtml += `<div class="dice">${diceRoll[i]}</div>`
  }

  document.getElementById(elementId).innerHTML =
    `<div class="character-card">
        <h4 class="name"> ${name} </h4>
        <img class="avatar" src="${avatar}" />
        <div class="health">health: <b>${health}</b></div>
        <div class="dice-container">
            ${diceHtml}
        </div>
    </div>`;
}

renderCharacter(hero);
renderCharacter(monster); */
/*
Challenge
1. Create a function called getDiceRollArray that uses a
   for loop to return an array of random numbers between 1-6.
2  The function should have diceCount as a parameter and the
   array it returns should be diceCount length.
3  For testing purposes, call the function with a diceCount of
   3 and log out the result.
** check out hint.md for extra help! **
*/
function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(function () {
    return Math.floor(Math.random() * 6) + 1
  })

  /* Challenge:
  1. Replace the for loop in getDiceRollArray with a new Array() and fill it
  with 0s as its initial state. The new array should be diceRoll length.
  2. Use .map() directly on the array rather than declaring any new variables
  and return a random number from 1-6 in each element of the array.
  3. Make sure you delete anything from that function that we no longer need.
  */
}

function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount).map(function (num) {
    return `<div class="dice">${num}</div>`
  }).join('')
}

const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceCount: 3
}

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceCount: 1
}

function renderCharacter(data) {
  const { elementId, name, avatar, health, diceCount } = data;
  const diceHtml = getDiceHtml(diceCount)

  document.getElementById(elementId).innerHTML =
    `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>`;
}

renderCharacter(hero);
renderCharacter(monster);
