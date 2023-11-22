var sidemenu = document.getElementById("sidemenu");

function openemenu() {
   sidemenu.style.right = "0";
}

function closemenu() {
   sidemenu.style.right = "-200px";
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
   for (const tablink of tablinks) {
      tablink.classList.remove("active-link");
   }

   for (const tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
   }

   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
}

<<<<<<< HEAD
const scriptURL = 'https://script.google.com/macros/s/AKfycbx8SSKoY6iHKIWeKYyHeCaRzd4Pjq0c3FQVCmiAh85FoAcA45B8u3VtyTQcbxzzq5xQ/exec';
=======


const scriptURL = 'https://script.google.com/macros/s/AKfycbyrwktPUuZbFhd-d1oIXp0imL0WzyGiBNqvBvDgnnA4i1bQ6sv3hwu8EKmaibZetw8S/exec';
>>>>>>> 29d975ae501d558368d54c33005bb34148daa45f
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
   event.preventDefault();

   if (validateForm()) {
      console.log("Validation passed");

      const formData = new FormData(form);

      fetch(scriptURL, {
         method: 'POST',
         body: formData
      })
      .then(response => {
         console.log("Response status:", response.status);
         return response.json();
      })
      .then(data => {
         console.log("Form submitted successfully:", data);
         msg.innerHTML = "Message sent successfully";
         setTimeout(function () {
            msg.innerHTML = "";
         }, 5000);
         form.reset();
      })
      .catch(error => {
         console.error("Form submission error:", error);
      });
   }
}

/*form validation*/

function validateForm() {
   console.log("Validating form");
   const name = form.elements['Name'].value.trim();
   const email = form.elements['email'].value.trim();
   const message = form.elements['Message'].value.trim();
   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   const namePattern = /^[A-Za-z\s]+$/; // Allow letters and spaces only

   if (name === "") {
      alert("Name must be filled out");
      form.elements['Name'].focus();
      return false;
   } else if (!name.match(namePattern)) {
      alert("Name must contain letters and spaces only");
      form.elements['Name'].focus();
      return false;
   }

   if (email === "") {
      alert("Email must be filled out");
      form.elements['email'].focus();
      return false;
   } else if (!email.match(emailPattern)) {
      alert("Invalid email format");
      form.elements['email'].focus();
      return false;
   }

   if (message === "") {
      alert("Message must be filled out");
      form.elements['Message'].focus();
      return false;
   }

   return true;
}
