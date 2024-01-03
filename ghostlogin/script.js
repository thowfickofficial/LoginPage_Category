const ghostEyes = document.querySelectorAll('.eye');
const ghost = document.querySelector('.ghost');
const flickeringLights = document.querySelector('.flickering-lights');

// Flickering lights animation
let isLightOn = true;

function flickerLights() {
    setTimeout(() => {
        if (isLightOn) {
            flickeringLights.style.backgroundColor = 'transparent';
        } else {
            flickeringLights.style.backgroundColor = '#ff9900'; // Orange light
        }
        isLightOn = !isLightOn;
        flickerLights();
    }, Math.random() * 200 + 100); // Random flicker interval
}

flickerLights();

document.addEventListener('mousemove', (e) => {
    ghostEyes.forEach((eye) => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeX = eyeRect.left + eyeRect.width / 2;
        const eyeY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
        const eyeTranslateX = Math.cos(angle) * 5;
        const eyeTranslateY = Math.sin(angle) * 5;

        eye.style.transform = `translate(${eyeTranslateX}px, ${eyeTranslateY}px)`;
    });

    // Ghostly hover effect
    const ghostRect = ghost.getBoundingClientRect();
    const ghostX = ghostRect.left + ghostRect.width / 2;
    const ghostY = ghostRect.top + ghostRect.height / 2;

    const angle = Math.atan2(e.clientY - ghostY, e.clientX - ghostX);
    const ghostTranslateX = Math.cos(angle) * 10;
    const ghostTranslateY = Math.sin(angle) * 10;

    ghost.style.transform = `translate(${ghostTranslateX}px, ${ghostTranslateY}px)`;
});

// Reset ghost position when the mouse leaves the container
document.querySelector('.horror-container').addEventListener('mouseleave', () => {
    ghost.style.transform = 'translate(0px, 0px)';
});

document.querySelector('.login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login functionality not implemented in this example.');
});
