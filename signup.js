
  document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Debugging: check values
  console.log("Saving:", username, password);

  console.log("Signup form:", document.getElementById("signupForm"));

    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    console.log("abc");
    console.log(localStorage.getItem("password"));

    // Redirect to homepage
    window.location.href = "Menu.html";
  });
