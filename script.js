const header = document.querySelector('.glass-nav');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

function onScroll() {
  if (window.scrollY > 12) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  let fromTop = window.scrollY + 90;
  navLinks.forEach(link => {
    const sec = document.querySelector(link.getAttribute('href'));
    if (!sec) return;
    if (sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll);

// Smooth scroll
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  if (id.length > 1 && document.querySelector(id)) {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', id);
  }
});
// Add scroll reveal effect if needed
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
// Scroll animation for feature cards
const featureCards = document.querySelectorAll(".feature-card");

function revealOnScroll() {
  const triggerBottom = window.innerHeight - 100;
  featureCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
// Fade-in animation for template cards
const templates = document.querySelectorAll(".template-card");

function showOnScroll() {
  const triggerBottom = window.innerHeight - 100;
  templates.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
// Fade-in animation for pricing cards
const priceCards = document.querySelectorAll(".price-card");

function showPriceCardsOnScroll() {
  const triggerBottom = window.innerHeight - 100;
  priceCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showPriceCardsOnScroll);
window.addEventListener("load", showPriceCardsOnScroll);
// Optional: Auto-cycle testimonials every 6 seconds
const carousel = document.querySelector('#testimonialCarousel');
if (carousel) {
  const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: 6000,
    ride: 'carousel'
  });
}
// Optional: Smooth scroll to opened FAQ item
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', function () {
    setTimeout(() => {
      this.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 400);
  });
});
// Smooth button click animation
document.querySelectorAll('.btn-cta').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 300);
  });
});
// Newsletter form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Thank you for subscribing!");
});

// Back to Top functionality
const backToTopBtn = document.getElementById("backToTop");
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("📩 Thank you! Your message has been sent.");
  this.reset();
});
document.getElementById("previewBtn").addEventListener("click", function () {
  const form = document.getElementById("resumeForm");
  const preview = document.getElementById("resumePreview");

  // Fill Preview
  document.getElementById("previewName").textContent = form.name.value;
  document.getElementById("previewEmail").textContent = form.email.value;
  document.getElementById("previewPhone").textContent = form.phone.value;
  document.getElementById("previewAddress").textContent = form.address.value;
  document.getElementById("previewEducation").textContent = form.education.value;
  document.getElementById("previewExperience").textContent = form.experience.value;
  document.getElementById("previewSkills").textContent = form.skills.value;

  // Show Preview
  preview.classList.remove("d-none");
  preview.scrollIntoView({ behavior: "smooth" });
});
