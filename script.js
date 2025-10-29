// Typing animation
document.addEventListener("DOMContentLoaded", () => {
  const text = "Full Stack Developer";
  const element = document.querySelector(".hero-content h2");
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      element.textContent = text.substring(0, i + 1);
      i++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});
document.querySelectorAll(".skill-category, .card, .hero-content, .hero-photo").forEach((el) =>
  observer.observe(el)
);

// Navbar active highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });
});

// Scroll-to-top button
const topButton = document.createElement("button");
topButton.innerHTML = "⬆";
topButton.classList.add("top-btn");
document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
  topButton.style.display = window.scrollY > 500 ? "block" : "none";
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
