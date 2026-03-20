document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("Username").value;
  const password = document.getElementById("Password").value;

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  console.log("Login form:", document.getElementById("loginForm"));
console.log("Username field:", document.getElementById("username"));
console.log("Password field:", document.getElementById("password"));

  if (username === savedUsername && password === savedPassword) {
    window.location.href = "Menu.html"; // success → homepage
  } else {
    alert("Invalid username or password. Please try again.");
  }
});