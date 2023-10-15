const scriptURL = 'https://script.google.com/macros/s/AKfycbx8SSKoY6iHKIWeKYyHeCaRzd4Pjq0c3FQVCmiAh85FoAcA45B8u3VtyTQcbxzzq5xQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
var sidemenu = document.getElementById("sidemenu")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function(){
         msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

function openemenu(){
    sidemenu.style.right= "0";
  }
  
  function closemenu(){
     sidemenu.style.right="-200px";
  }