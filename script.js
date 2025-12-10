// Счётчик дней вместе (поменяй дату вашей встречи!)
const startDate = new Date("2025-01-11"); // ←←←←←← ИЗМЕНИ НА СВОЮ ДАТУ!
function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("days").textContent = days;
}
updateCounter();
setInterval(updateCounter, 86400000);

// Модальные окна
function openModal(num) {
    document.getElementById("modal" + num).style.display = "flex";
}
function closeModal() {
    document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
}

// Конфетти
function shootConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb']
    });
}

// Музыка
function playSong() {
    const audio = document.getElementById("loveSong");
    if (audio.paused) {
        audio.play();
        alert("Сейчас заиграет наша песня ♪");
    } else {
        audio.pause();
    }
}

// Летающие сердечки на фоне
setInterval(() => {
    const h = document.createElement("div");
    h.innerHTML = ["♡","♥","💗","💖","💕"][Math.floor(Math.random()*5)];
    h.style.position = "fixed";
    h.style.left = Math.random() * 100 + "vw";
    h.style.bottom = "-50px";
    h.style.fontSize = Math.random() * 30 + 20 + "px";
    h.style.color = ["#ff69b4","#ff1493","#ff8fab","#c71585"][Math.floor(Math.random()*4)];
    h.style.zIndex = 0;
    h.style.animation = "fly 7s linear forwards";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 7000);
}, 600);

const style = document.createElement('style');
style.innerHTML = `@keyframes fly { to { transform: translateY(-120vh) rotate(720deg); opacity: 0; } }`;
document.head.appendChild(style);