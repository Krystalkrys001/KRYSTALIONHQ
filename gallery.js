// ============================================================
// KRYSTALION HQ — IMAGE GALLERY SLIDERS
// ============================================================

// Init all suite card galleries
document.querySelectorAll('.suite-gallery').forEach(gallery => {
  const slides = gallery.querySelector('.suite-slides');
  const prevBtn = gallery.querySelector('.slide-prev');
  const nextBtn = gallery.querySelector('.slide-next');
  const counter = gallery.querySelector('.slide-counter');
  const total = slides.querySelectorAll('img').length;
  let current = 0;

  function goTo(index) {
    current = (index + total) % total;
    slides.style.transform = `translateX(-${current * 100}%)`;
    counter.textContent = `${current + 1} / ${total}`;
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // Auto-advance
  setInterval(() => goTo(current + 1), 5000);
});

// Presidential Suite Gallery
const presSlides = document.querySelector('.pres-slides');
if (presSlides) {
  const presGallery = document.querySelector('.presidential-gallery');
  const presPrev = presGallery.querySelector('.pres-prev');
  const presNext = presGallery.querySelector('.pres-next');
  const presCounter = presGallery.querySelector('.pres-counter');
  const presTotal = presSlides.querySelectorAll('img').length;
  let presCurrent = 0;

  function presGoTo(index) {
    presCurrent = (index + presTotal) % presTotal;
    presSlides.style.transform = `translateX(-${presCurrent * 100}%)`;
    presCounter.textContent = `${presCurrent + 1} / ${presTotal}`;
  }

  presPrev.addEventListener('click', () => presGoTo(presCurrent - 1));
  presNext.addEventListener('click', () => presGoTo(presCurrent + 1));

  setInterval(() => presGoTo(presCurrent + 1), 6000);
}
