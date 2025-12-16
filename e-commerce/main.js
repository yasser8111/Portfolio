/* =============== SHOW MENU & THEME (unchanged) =============== */
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
} else {
  themeButton.classList.remove(iconTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/* =============== LOCALIZATION & LANGUAGE SWITCHER (NEW) =============== */
let translations = {};
const langButton = document.getElementById("lang-button");
let currentLang = localStorage.getItem("currentLang") || "en";

async function fetchTranslations() {
  try {
    const response = await fetch("./locales.json");
    translations = await response.json();
    applyLanguage(currentLang);
  } catch (error) {
    console.error("Error loading localization file:", error);
  }
}

function applyLanguage(lang) {
  if (!translations[lang]) return;

  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    const text = translations[lang][key];
    if (text) {
      if (element.tagName === "INPUT" && element.hasAttribute("placeholder")) {
        element.setAttribute("placeholder", text);
      } else {
        element.textContent = text;
      }
    }
  });

  if (lang === "ar") {
    document.documentElement.setAttribute("lang", "ar");
    document.body.classList.add("rtl");
    document.body.classList.remove("ltr");
  } else {
    document.documentElement.setAttribute("lang", "en");
    document.body.classList.add("ltr");
    document.body.classList.remove("rtl");
  }

  updateLangButton(lang);

  renderProducts();
}

function updateLangButton(lang) {
  if (langButton) {
    if (lang === "ar") {
      langButton.textContent = "EG";
    } else {
      langButton.textContent = "AR";
    }
  }
}

if (langButton) {
  langButton.addEventListener("click", () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    currentLang = newLang;
    localStorage.setItem("currentLang", newLang);
    applyLanguage(newLang);
  });
}

/* =============== PRODUCT DATA WITH DETAILS (UPDATED) =============== */
import { products } from "./products.js";

const productsGrid = document.getElementById("products-grid"); // index.html
const productsGridFull = document.getElementById("products-grid-full"); // products.html

function createProductCard(product) {
  const productNameKey = currentLang === "ar" ? "name_ar" : "name_en";
  return `
        <article class="product__card">
            <a href="product-details.html?id=${product.id}&lang=${currentLang}">
                <div class="product__img-wrapper">
                    <i class="ri-image-line"></i>
                </div>
            </a>
            <h3 class="product__title"><a href="product-details.html?id=${
              product.id
            }&lang=${currentLang}">${product[productNameKey]}</a></h3>
            <span class="product__price">$${product.price.toFixed(2)}</span>
            <button class="product__button" onclick="addToCart('${
              product[productNameKey]
            }')">
                <i class="ri-add-line"></i>
            </button>
        </article>
    `;
}

function renderProducts() {
  if (productsGrid) {
    productsGrid.innerHTML = products
      .slice(0, 4)
      .map(createProductCard)
      .join("");
  }

  if (productsGridFull) {
    productsGridFull.innerHTML = products.map(createProductCard).join("");
  }
}

/* =============== PRODUCT DETAILS PAGE LOGIC (NEW) =============== */
function getProductById(id) {
  return products.find((p) => p.id == id);
}

function renderProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const product = getProductById(productId);

  if (!product) return;

  const nameKey = currentLang === "ar" ? "name_ar" : "name_en";
  const descKey = currentLang === "ar" ? "desc_ar" : "desc_en";

  document.getElementById("detail-category").textContent =
    translations[currentLang]["product_category_apparel"];
  document.getElementById("detail-title").textContent = product[nameKey];
  document.getElementById(
    "detail-price"
  ).textContent = `$${product.price.toFixed(2)}`;
  document.getElementById("detail-description").textContent = product[descKey];

  const sizesContainer = document.getElementById("detail-sizes");
  if (sizesContainer) {
    sizesContainer.innerHTML = product.sizes
      .map(
        (size, index) =>
          `<span class="detail__size ${
            index === 0 ? "detail__size--active" : ""
          }" data-size="${size}">${size}</span>`
      )
      .join("");
    sizesContainer.querySelectorAll(".detail__size").forEach((el) => {
      el.addEventListener("click", () => {
        sizesContainer
          .querySelector(".detail__size--active")
          .classList.remove("detail__size--active");
        el.classList.add("detail__size--active");
      });
    });
  }

  const colorsContainer = document.getElementById("detail-colors");
  if (colorsContainer) {
    colorsContainer.innerHTML = product.colors
      .map(
        (color, index) =>
          `<span class="detail__color detail__color--${color.name
            .toLowerCase()
            .replace(/\s/g, "-")}" style="background-color: ${color.code};" 
                data-color="${color.name}" 
                ${
                  index === 0
                    ? 'class="detail__color detail__color--active"'
                    : ""
                }>
            </span>`
      )
      .join("");
    colorsContainer.querySelectorAll(".detail__color").forEach((el) => {
      el.addEventListener("click", () => {
        colorsContainer
          .querySelector(".detail__color--active")
          .classList.remove("detail__color--active");
        el.classList.add("detail__color--active");
      });
    });
  }
}

/* =============== Initialization & Event Listeners =============== */
document.addEventListener("DOMContentLoaded", () => {
  fetchTranslations();

  if (document.body.classList.contains("product-details-page")) {
    renderProductDetails();
  }
});

/* =============== CART LOGIC (UNCHANGED) =============== */
let count = 0;
const countEl = document.querySelector(".cart-count");
const toast = document.getElementById("toast");

function addToCart(item) {
  count++;
  countEl.innerText = count;
  if (count === 0) {
    countEl.style.display = "none";
  } else {
    countEl.style.display = "flex";
  }

  toast.innerText = translations[currentLang]["toast_added_cart"];
  toast.className = "toast show";
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
