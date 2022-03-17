let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", event => {
  // Stop the default event behavior
  event.preventDefault()

  // use FormData to get the User's name and email
  let OurFormData = new FormData(event.target)
  let UserFirstName = OurFormData.get("firstName")
  let UserEmailAddress = OurFormData.get("emailAddress")

  let updatedHtmlContent = `
        <h2>Congratulations, ${UserFirstName}!</h2>

        <p>You're on your way to becoming a BBQ Master!</p>

         <p class="fine-print">You will get weekly BBQ tips sent to: ${UserEmailAddress}</p>

         <p class="fine-print">We'll never share your information without your permission</p>

     `
  let OurMainContent = document.getElementById("Main-Content")
  OurMainContent.innerHTML = updatedHtmlContent

})
