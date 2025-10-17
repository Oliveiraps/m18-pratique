

// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
const logo = document.querySelector(".logo");
const cards = document.querySelectorAll(".card");

  // ✨ Animação de brilho no logo (pulso metálico)
function pulseLogo() {
    logo.classList.add("glow");
    setTimeout(() => logo.classList.remove("glow"), 1000);
}
  setInterval(pulseLogo, 3000); // repete a cada 3s

  // ⚡ Efeito de hover "energia da forja"
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
    card.classList.add("energized");
    });
    card.addEventListener("mouseleave", () => {
    card.classList.remove("energized");
    });
});

  // 🔥 Animação de entrada (reveal) ao rolar
const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    cards.forEach((card) => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
        card.classList.add("visible");
    }
    });
};
window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // roda uma vez no início
});
