// ============================================================
// KRYSTALION HQ — ACCORDION
// ============================================================

document.querySelectorAll('.accord-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.accord-item');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.accord-item').forEach(i => i.classList.remove('open'));

    // Open clicked if it was closed
    if (!isOpen) {
      item.classList.add('open');
    }
  });
});
