// ============================================================
// KRYSTALION HQ — HERO PARALLAX
// ============================================================

const heroBg = document.getElementById('heroBg');

window.addEventListener('scroll', () => {
  if (heroBg) {
    const scrollY = window.scrollY;
    heroBg.style.transform = `scale(1.1) translateY(${scrollY * 0.3}px)`;
  }
}, { passive: true });
