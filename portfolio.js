var sidemenu = document.getElementById("sidemenu");
function openemenu(){
   sidemenu.style.right = "0";
}

function closemenu(){
   sidemenu.style.right = "-200px";
}



var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
   for(tablink of tablinks){
      tablink.classList.remove("active-link");
   }

   for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
   }
   
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbx8SSKoY6iHKIWeKYyHeCaRzd4Pjq0c3FQVCmiAh85FoAcA45B8u3VtyTQcbxzzq5xQ/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  
  if (validateForm()) { // Check if the form is valid
     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
           msg.innerHTML = "Message sent successfully";
           setTimeout(function() {
              msg.innerHTML = "";
           }, 5000);
           form.reset();
        })
        .catch(error => console.error('Error!', error.message));
  }
});

/*form validation*/

function validateForm() {
   const name = form.elements['Name'].value;
   const email = form.elements['email'].value;
   const message = form.elements['Message'].value;
   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   const namePattern = /^[A-Za-z\s]+$/; // Allow letters and spaces only

   if (name.trim() === "") {
      alert("Name must be filled out");
      return false;
   } else if (!name.match(namePattern)) {
      alert("Name must contain letters and spaces only");
      return false;
   }

   if (email.trim() === "") {
      alert("Email must be filled out");
      return false;
   } else if (!email.match(emailPattern)) {
      alert("Invalid email format");
      return false;
   }

   if (message.trim() === "") {
      alert("Message must be filled out");
      return false;
   }

   return true;
}
 