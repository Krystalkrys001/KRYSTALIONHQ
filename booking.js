// ============================================================
// KRYSTALION HQ — BOOKING FORM
// ============================================================

const roomPrices = {
  standard: {
    classic: 25000,
    deluxe: 50000,
    executive: 75000,
    junior: 100000
  },
  apartment: {
    luxury: 180000,
    premier: 350000,
    elite: 500000,
    presidential: 1000000
  }
};

const standardOptions = `
  <option value="classic">Classic Room — ₦25,000/night</option>
  <option value="deluxe">Deluxe Room — ₦50,000/night</option>
  <option value="executive">Executive Room — ₦75,000/night</option>
  <option value="junior">Junior Suite — ₦100,000/night</option>
`;

const apartmentOptions = `
  <option value="luxury">Luxury Apartment — ₦180,000/night</option>
  <option value="premier">Premier Apartment — ₦350,000/night</option>
  <option value="elite">Elite Apartment — ₦500,000/night</option>
  <option value="presidential">Presidential Suite — ₦1,000,000/night</option>
`;

let currentCategory = 'standard';

// Category toggle
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.cat;
    const roomSelect = document.getElementById('roomSelect');
    roomSelect.innerHTML = currentCategory === 'standard' ? standardOptions : apartmentOptions;
    updateTotal();
  });
});

// Update total estimate
function updateTotal() {
  const roomSelect = document.getElementById('roomSelect');
  const duration = document.getElementById('duration').value;
  const checkin = document.getElementById('checkin').value;
  const checkout = document.getElementById('checkout').value;

  const pricePerNight = currentCategory === 'standard'
    ? roomPrices.standard[roomSelect.value]
    : roomPrices.apartment[roomSelect.value];

  let nights = 1;
  if (checkin && checkout) {
    const diff = (new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24);
    if (diff > 0) nights = diff;
  } else {
    if (duration === 'week') nights = 7;
    else if (duration === 'month') nights = 30;
    else if (duration === 'year') nights = 365;
  }

  const total = pricePerNight * nights;
  document.getElementById('totalAmount').textContent = '₦' + total.toLocaleString();
}

// Listen for changes
['roomSelect', 'duration', 'checkin', 'checkout'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('change', updateTotal);
});

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('checkin').min = today;
document.getElementById('checkout').min = today;

document.getElementById('checkin').addEventListener('change', function () {
  document.getElementById('checkout').min = this.value;
});

// Form submit
document.getElementById('bookingForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('enqName')?.value || 'Valued Guest';
  document.getElementById('successMessage').textContent =
    `Thank you! Our reservations team will contact you within 2 hours to confirm your booking.`;
  document.getElementById('bookingSuccessModal').classList.add('open');
});
