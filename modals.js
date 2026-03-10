// ============================================================
// KRYSTALION HQ — MODALS
// ============================================================

// Dining Modal
const diningModal = document.getElementById('diningModal');
const openDiningBtns = [
  document.getElementById('openDiningModal'),
  document.getElementById('openDiningModalFloat')
];
const closeDiningBtn = document.getElementById('closeDiningModal');

openDiningBtns.forEach(btn => {
  if (btn) {
    btn.addEventListener('click', () => {
      diningModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
});

closeDiningBtn.addEventListener('click', () => {
  diningModal.classList.remove('open');
  document.body.style.overflow = '';
});

diningModal.addEventListener('click', (e) => {
  if (e.target === diningModal) {
    diningModal.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Menu Tabs
document.querySelectorAll('.menu-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.menu-section').forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('menu-' + tab.dataset.menu).classList.add('active');
  });
});

// Success Modal
const successModal = document.getElementById('bookingSuccessModal');
document.getElementById('closeSuccessModal').addEventListener('click', () => {
  successModal.classList.remove('open');
  document.body.style.overflow = '';
});

successModal.addEventListener('click', (e) => {
  if (e.target === successModal) {
    successModal.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Close on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    diningModal.classList.remove('open');
    successModal.classList.remove('open');
    document.body.style.overflow = '';
  }
});
