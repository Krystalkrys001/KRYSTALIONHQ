// ============================================================
// KRYSTALION HQ — FORMS
// ============================================================

// Enquiry Form
const enquiryForm = document.getElementById('enquiryForm');
const enquirySuccess = document.getElementById('enquirySuccess');

if (enquiryForm) {
  enquiryForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('enqName').value;
    enquirySuccess.textContent = `Thank you ${name}! Our reservations team will contact you within 2 hours.`;
    enquirySuccess.classList.add('show');
    enquiryForm.reset();
    setTimeout(() => enquirySuccess.classList.remove('show'), 6000);
  });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
const newsletterSuccess = document.getElementById('newsletterSuccess');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    newsletterSuccess.textContent = '✓ You\'re subscribed! Exclusive offers are on their way.';
    newsletterSuccess.classList.add('show');
    newsletterForm.reset();
    setTimeout(() => newsletterSuccess.classList.remove('show'), 6000);
  });
}

// Booking form also triggers success modal (defined in booking.js)
// This handles the enquiry name being used in booking modal
document.getElementById('bookingForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('bookingSuccessModal').classList.add('open');
  document.body.style.overflow = 'hidden';
});
