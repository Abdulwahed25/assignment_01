// Welcome alert
alert("Welcome to my portfolio!");

//  Greeting by time of day
let hour = new Date().getHours();
let message = "";

if (hour < 12) {
  message = "Good Morning!";
} else if (hour < 18) {
  message = "Good Afternoon!";
} else {
  message = "Good Evening!";
}

document.getElementById("greeting").innerText = message;

//  Thank you message for form
let form = document.getElementById("contact-form");
form.onsubmit = function(e) {
  e.preventDefault();
  alert("Thank you for your message!");
  form.reset();
};

//  Dark and Light theme 
let button = document.getElementById("theme-toggle");
button.onclick = function() {
  document.body.classList.toggle("dark-mode");
};