const translations = {
  en: {
    name: "Yasser Tariq Al-Nahdi",
    lang_text: "AR",
    nav_work: "Work",
    nav_about: "Skills",
    nav_contact: "Contact",
    hero_intro: "01 / INTRO",
    hero_main_title: "Designing logic.<br>Building worlds.",
    hero_role_description:
      "A multidisciplinary Developer & Designer focused on crafting clean code and immersive gameplay experiences.",
    typing_phrases: [
      "Web Developer",
      "Game Developer",
      "UI/UX Designer",
      "Graphic Designer",
      "Mobile App Developer",
      "Frontend Engineer",
    ],
    typing_prefix: "I'm",
    work_title: "02 / WORKS",
    proj1_title: "Ethereal Engine",
    proj2_title: "FinTech Dashboard",
    proj3_title: "Travel App Redesign",
    proj4_title: "Modular E-Commerce",
    proj5_title: "Pixel Platformer",
    proj6_title: "Code Snippet Library",
    skills_title: "03 / TECH STACK",
    contact_intro: "04 / GET IN TOUCH",
    contact_heading: "Have a project in mind?",
    footer_copy: "&copy; 2025 Yasser Tariq Al-Nahdi",
    footer_tagline: "DESIGNED WITH PURPOSE",
  },
  ar: {
    name: "ياسر طارق النهدي",
    lang_text: "EN",
    nav_work: "الأعمال",
    nav_about: "المهارات",
    nav_contact: "اتصل بي",
    hero_intro: "01 / مقدمة",
    hero_main_title: "تصميم المنطق.<br>بناء العوالم.",
    hero_role_description:
      "أنا مطور ومصمم متعدد التخصصات، أركز على صياغة أكواد نظيفة وتجارب لعب غامرة.",
    typing_phrases: [
      "مطور ويب",
      "مطور ألعاب",
      "مصمم Ui/UX",
      "مصمم جرافيك",
      "مطور تطبيقات موبايل",
      "مطور واجهات أمامية",
    ],
    typing_prefix: "أنا",
    work_title: "02 / الاعمال",
    proj1_title: "محرك الأثير الافتراضي",
    proj2_title: "لوحة تحكم FinTech",
    proj3_title: "إعادة تصميم تطبيق سفر",
    proj4_title: "منصة تجارة إلكترونية متكاملة",
    proj5_title: "لعبة منصات بالبكسل",
    proj6_title: "مكتبة قصاصات الكود",
    skills_title: "03 /  التقنيات و اللغات البرمجة",
    contact_intro: "04 / تواصل معي",
    contact_heading: "هل لديك مشروع في بالك؟",
    footer_copy: "© 2025 ياسر طارق النهدي",
  },
};

let currentLang = "en";
let typingInstance = null;

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

  startTypingAnimation(translations[currentLang].typing_phrases);
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
    darkLogo.style.display = "block";
    lightLogo.style.display = "none";
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    darkLogo.style.display = "none";
    lightLogo.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  startLoaderCounter();

  currentLang = "ar";
  toggleLanguage();

  const body = document.body;
  body.classList.remove("light-mode");
  document.getElementById("mode-icon").classList.add("fa-sun");

  document.getElementById("dark-logo").style.display = "none";
  document.getElementById("light-logo").style.display = "block";
  window.setTimeout(() => {
    window.scrollTo(0, 0);
  }, 2900);
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9 
  };

  const observer = new IntersectionObserver((entries) => {
    if (window.innerWidth > 768) return; 

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach((item) => {
    observer.observe(item);
  });