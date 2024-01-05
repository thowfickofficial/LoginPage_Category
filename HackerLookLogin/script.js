document.addEventListener("DOMContentLoaded", function () {
    // Function to trigger matrix rain animation
    function startMatrixRain() {
        const matrixContainer = document.querySelector(".matrix-container");
        matrixContainer.innerHTML = "";

        const columns = 100;
        const rows = 30;

        for (let i = 0; i < columns * rows; i++) {
            const character = document.createElement("span");
            character.innerText = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
            matrixContainer.appendChild(character);
        }

        let matrixCharacters = matrixContainer.querySelectorAll("span");

        function updateMatrix() {
            matrixCharacters = matrixContainer.querySelectorAll("span");
            matrixCharacters.forEach((char, index) => {
                char.style.animationDelay = `${index * 50}ms`;
            });
        }

        updateMatrix();

        window.addEventListener("resize", updateMatrix);
    }

    const loginForm = document.getElementById("login-form");
    const successMessage = document.querySelector(".success-message");
    const errorMessage = document.querySelector(".error-message");
    const container3D = document.querySelector(".container-3d");
    const cube = document.querySelector(".cube");

    let cubeRotation = 0;

    function rotateCube() {
        cube.style.transform = `rotateY(${cubeRotation}deg)`;
        cubeRotation += 1;
        requestAnimationFrame(rotateCube);
    }

    // Start cube rotation on page load
    rotateCube();

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Simulate a login request (you should replace this with actual authentication)
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Example: Check if the username is "admin" and the password is "password"
        if (username === "admin" && password === "password") {
            successMessage.style.display = "block";
            errorMessage.style.display = "none";
            startMatrixRain();
        } else {
            errorMessage.style.display = "block";
            successMessage.style.display = "none";
        }
    });
});
