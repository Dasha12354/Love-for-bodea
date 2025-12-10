// Курсор-сердечко
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Счётчик дней (измени дату!)
const startDate = new Date("2025-01-11"); // ← твоя дата здесь
const daysEl = document.getElementById("days");
function updateDays() {
    const diff = Date.now() - startDate;
    daysEl.textContent = Math.floor(diff / 86400000);
}
updateDays();
setInterval(updateDays, 3600000);

// Параллакс галереи
window.addEventListener('scroll', () => {
    document.querySelectorAll('.gallery-item').forEach(img => {
        const speed = img.dataset.speed;
        const yPos = -(window.scrollY * speed / 6);
        img.style.transform = `translateY(${yPos}px)`;
    });
});

// Флип карточек
function flip(el) {
    el.querySelector('.letter-inner').style.transform = 'rotateY(180deg)';
}

// Конфетти-взрыв
function explodeLove() {
    confetti({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493', '#ffb6c1', '#ff8fab', '#ffc0cb']
    });
}

// Летающие сердечки (ещё красивее)
setInterval(() => {
    const h = document.createElement('div');
    h.innerHTML = ['♡','♥','✧','❥','💗'][Math.floor(Math.random()*5)];
    h.style.cssText = `
        position: fixed;
        left: ${Math.random()*100}vw;
        top: -50px;
        font-size: ${Math.random()*30+30}px;
        color: #ff69b4;
        pointer-events: none;
        animation: fall 8s linear forwards;
        z-index: 5;
    `;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 8000);
}, 400);

const style = document.createElement('style');
style.innerHTML = `@keyframes fall { to { transform: translateY(110vh) rotate(720deg); opacity: 0; } }`;
document.head.appendChild(style);
