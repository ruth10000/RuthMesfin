
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });


  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  scrollTopBtn.classList.toggle('show', window.scrollY > 500);
};

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

let scrollTopBtn = document.createElement('div');
scrollTopBtn.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
scrollTopBtn.className = 'scroll-top-btn';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const modeToggle = document.createElement('div');
modeToggle.innerHTML = '<i class="bx bx-moon"></i>';
modeToggle.className = 'mode-toggle';
document.body.appendChild(modeToggle);

modeToggle.onclick = () => {
  document.body.classList.toggle('light-mode');
  const icon = modeToggle.querySelector('i');
  icon.classList.toggle('bx-sun');
  icon.classList.toggle('bx-moon');
};

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = "Sending... 💌";
  
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.textContent = "Thank you! Your message has been sent 💖";
      form.reset();
    } else {
      status.textContent = "Oops! Something went wrong. Please try again.";
    }
  } catch (error) {
    status.textContent = "Network error. Please check your connection.";
  }
});
document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("🎉 Thank you  Your message has been sent successfully!");
      form.reset();
    } else {
      alert("⚠️ Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("❌ Network error — please check your internet and try again.");
  }
});






