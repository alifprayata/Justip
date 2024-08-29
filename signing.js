document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  console.log("Login submitted");
  goToHomepage(); 
});

document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();
 
  console.log("Signup submitted");
  goToHomepage(); 
});

const checkbox = document.getElementById('agree-terms');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    this.parentElement.style.backgroundColor = '#00ff00';
  } else {
    this.parentElement.style.backgroundColor = '';
  }
});

function goToHomepage() {
  window.location.href = "homepage.html"; 
}
