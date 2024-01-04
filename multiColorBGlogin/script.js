document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Simulate a login request (replace with actual authentication logic)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can implement more secure authentication here
    if (username === "your_username" && password === "your_password") {
        alert("Login Successful!");
    } else {
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
    }
});
