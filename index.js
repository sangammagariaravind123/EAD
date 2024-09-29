document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMsg = document.getElementById("error-msg");

    if (username === "admin" && password === "admin") {
      alert("Login successful!");
      errorMsg.style.display = "none";
      // You can redirect to another page here
    } else {
      errorMsg.textContent = "Invalid username or password!";
      errorMsg.style.display = "block";
    }
  });
