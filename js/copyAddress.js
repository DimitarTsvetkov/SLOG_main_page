function copyAddress() {
    const address = document.getElementById('walletAddress').innerText;
    navigator.clipboard.writeText(address).then(function () {
        // Animate the copied span
        const successSpan = document.getElementById('copySuccess');
        successSpan.classList.add('active');
        // Show confetti
        fireConfetti();
        setTimeout(() => {
            successSpan.classList.remove('active');
        }, 1500);
    });
}

// Simple confetti burst
function fireConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    resizeConfettiCanvas();
    canvas.style.display = 'block';
    let confetti = [];
    for (let i = 0; i < 85; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.2 + window.innerHeight * 0.25,
            r: Math.random() * 8 + 4,
            d: Math.random() * 30 + 6,
            color: randomColor(),
            tilt: Math.random() * 20 - 10,
            tiltAngle: 0
        });
    }
    let frame = 0;
    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
            ctx.fillStyle = c.color;
            ctx.fill();
        });
        updateConfetti();
        frame++;
        if (frame < 45) {
            requestAnimationFrame(drawConfetti);
        } else {
            canvas.style.display = 'none';
        }
    }
    function updateConfetti() {
        confetti.forEach(c => {
            c.y += Math.random() * 6 + 2;
            c.x += Math.sin(c.y / 25);
        });
    }
    drawConfetti();
}
// Helper
function randomColor() {
    const colors = ['#fec016', '#06bc45', '#29cdff', '#ff718d', '#78ff44', '#fb7e27', '#fdff6a'];
    return colors[Math.floor(Math.random() * colors.length)];
}
function resizeConfettiCanvas() {
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeConfettiCanvas);
