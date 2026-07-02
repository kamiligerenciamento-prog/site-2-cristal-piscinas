// ===== Mobile menu toggle =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });

  // Close menu when a link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('is-open'));
  });
}

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

function setActiveLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('nav__link--active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('nav__link--active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);

// ===== Testimonials slider (simple loop for mobile / extra items) =====
const track = document.getElementById('testimonialTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (track && prevBtn && nextBtn) {
  const cards = Array.from(track.children);
  let index = 0;

  function isMobile() {
    return window.innerWidth <= 900;
  }

  function update() {
    if (!isMobile()) {
      track.style.transform = 'none';
      return;
    }
    const cardWidth = cards[0].getBoundingClientRect().width + 22; // gap
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  prevBtn.addEventListener('click', () => {
    if (!isMobile()) return;
    index = (index - 1 + cards.length) % cards.length;
    update();
  });

  nextBtn.addEventListener('click', () => {
    if (!isMobile()) return;
    index = (index + 1) % cards.length;
    update();
  });

  window.addEventListener('resize', update);
}

// ===== Header background on scroll =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 8px 24px -8px rgba(0,0,0,0.5)';
  } else {
    header.style.boxShadow = 'none';
  }
});
