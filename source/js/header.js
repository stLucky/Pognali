const header = document.querySelector(".header");
const mainNav = document.querySelector(".main-nav");
const mainPage = document.querySelector(".main");
const headerToggle = document.querySelector(".header__toggle");
const toogleText = headerToggle.querySelector(".visually-hidden");

headerToggle.addEventListener("click", function () {
  if (header.classList.contains("header--opened")) {
    toogleText.textContent = "Закрыть меню";
    header.classList.remove("header--opened");
  } else {
    toogleText.textContent = "Открыть меню";
    header.classList.add("header--opened");
  }

  if (header.classList.contains("header--scroll") && header.classList.contains("header--opened")) {
    headerToggle.classList.remove("header__toggle--theme-smoke");
  }
  if (header.classList.contains("header--scroll") && header.classList.contains("header--opened") === false) {
    headerToggle.classList.add("header__toggle--theme-smoke");
  }
});

header.classList.remove("header--nojs");
mainPage.classList.remove("main--nojs");

window.addEventListener("scroll", function () {
  header.classList.add("header--scroll");
  headerToggle.classList.add("header__toggle--theme-smoke");
  mainNav.classList.remove("main-nav--theme-light");

  if (pageYOffset > 0 && header.classList.contains("header--opened")) {
    headerToggle.classList.remove("header__toggle--theme-smoke");
  }

  if (pageYOffset === 0) {
    headerToggle.classList.remove("header__toggle--theme-smoke");
    header.classList.remove("header--scroll");
    mainNav.classList.add("main-nav--theme-light");
  }
});
