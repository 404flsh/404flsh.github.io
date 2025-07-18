document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('bookBtn');
  if (!btn) return; // If there's no button on the page, do nothing

  btn.addEventListener('click', () => {
    if (btn.textContent === 'Book Now') {
      btn.textContent = 'Booked!';
    } else {
      // Read the error message from the button's data attribute
      const message = btn.getAttribute('data-error-message') || 'No cancellations allowed.';
      alert(message);
    }
  });
});

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
