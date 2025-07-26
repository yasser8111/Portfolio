// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Tab Switching
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and contents
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active class to clicked button and corresponding content
    button.classList.add("active");
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

// Back to Top Button
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Animation on Scroll
const animatedElements = document.querySelectorAll(".animated");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.8;

  animatedElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add("fade-in");
    }
  });
}

// Initial check on page load
checkScroll();

// Check on scroll
window.addEventListener("scroll", checkScroll);

// Form Submission (placeholder)
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Form submission logic would go here
  alert(
    "Thank you for your message! This is a demo form, in a real website it would send your message."
  );
  contactForm.reset();
});

// Set active navigation based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
// — theme toggler —
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// FontAwesome class names
const sunClass = "fa-solid fa-sun";
const moonClass = "fa-solid fa-moon";

function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeIcon.className = moonClass;
  } else {
    document.documentElement.removeAttribute("data-theme");
    themeIcon.className = sunClass;
  }
  localStorage.setItem("theme", theme);
}

// initialize on load
(function () {
  const saved = localStorage.getItem("theme") || "light";
  setTheme(saved);
})();

// click handler
themeToggle.addEventListener("click", () => {
  const current =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";
  setTheme(current);
});
