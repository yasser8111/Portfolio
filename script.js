import { translations } from "./translations.js";

let currentLang = "en";
let typingInstance = null;

window.toggleLanguage = toggleLanguage;
window.toggleMode = toggleMode;

function startLoaderCounter() {
  const loaderText = document.querySelector(".loader-prsint");
  if (!loaderText) return;

  let count = 0;
  const duration = 1500;
  const incrementTime = duration / 100;

  const counter = setInterval(() => {
    count++;
    loaderText.textContent = `${count}%`;

    if (count === 100) {
      clearInterval(counter);
    }
  }, incrementTime);
}

function startTypingAnimation(phrases) {
  if (typingInstance) {
    clearTimeout(typingInstance);
  }
  const textElement = document.getElementById("typing-text");
  if (!textElement) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      textElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }

    typingInstance = setTimeout(type, typeSpeed);
  }
  type();
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";
  const html = document.documentElement;
  const body = document.body;
  
  if (currentLang === "ar") {
    html.setAttribute("lang", "ar");
    body.setAttribute("dir", "rtl");
  } else {
    html.setAttribute("lang", "en");
    body.setAttribute("dir", "ltr");
  }

  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    const translation = translations[currentLang][key];

    if (key === "hero_main_title" || key === "footer_copy") {
      el.innerHTML = translation;
    } else if (key === "lang_text" || key === "typing_prefix") {
      el.textContent = translation;
    } else {
      el.textContent = translation;
    }
  });

  if (translations[currentLang].typing_phrases) {
    startTypingAnimation(translations[currentLang].typing_phrases);
  }
}

function toggleMode() {
  const darkLogo = document.getElementById("dark-logo");
  const lightLogo = document.getElementById("light-logo");
  const body = document.body;
  const icon = document.getElementById("mode-icon");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    if (darkLogo) darkLogo.style.display = "block";
    if (lightLogo) lightLogo.style.display = "none";
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    if (darkLogo) darkLogo.style.display = "none";
    if (lightLogo) lightLogo.style.display = "block";
  }
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-section");
  
  const revealOptions = {
    threshold: 0.15, 
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  }, revealOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  startLoaderCounter();

  currentLang = "ar"; 
  toggleLanguage(); 

  const body = document.body;
  body.classList.remove("light-mode");
  const modeIcon = document.getElementById("mode-icon");
  if (modeIcon) modeIcon.classList.add("fa-sun");

  const darkLogo = document.getElementById("dark-logo");
  const lightLogo = document.getElementById("light-logo");
  if (darkLogo) darkLogo.style.display = "none";
  if (lightLogo) lightLogo.style.display = "block";

  window.setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100); 

  initScrollReveal();

  const mobileObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  const mobileObserver = new IntersectionObserver((entries) => {
    if (window.innerWidth > 768) return; 

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, mobileObserverOptions);

  const projectItems = document.querySelectorAll(".project-item");
  projectItems.forEach((item) => {
    mobileObserver.observe(item);
  });
});