/*
Challenge
1. Use what you have learned to get rid of the commas.
*/

const guestList = ['Tom', 'Mary', 'Clare', 'John', 'Liz']

const guestsHtml = guestList.map(function (guest) {
  return `<div class="box">${guest}</div>`
})


document.getElementById('list').innerHTML = guestsHtml.join('')
