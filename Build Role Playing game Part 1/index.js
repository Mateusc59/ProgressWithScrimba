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
*/

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
renderCharacter(monster);
