// we need an event listener just attaches to an element (like a light switch) - in this case a DOM element, our button(s)!
// DOM elements = anything you see on the page on the document (divs, buttons, tables, links--any HTML element!divs, buttons, tables, links--any HTML element!)
// you can switch out "click" or be other types of DOM events (keydown, mouseover), any sort of event that a user can do, you can capture user actions using event listeners!

const openModal = document.getElementById("open-modal")
const closeModal = document.getElementById("close-modal")

openModal.addEventListener("click", function () {
  modal.style.display = "block";
})

closeModal.addEventListener("click", function () {
  modal.style.display = "none"
})
