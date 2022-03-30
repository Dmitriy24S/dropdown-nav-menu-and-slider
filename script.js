// nav menu
const subMenus = document.querySelectorAll(".sub");
const navMenu = document.querySelector(".nav-menu");

const navMenutoggle = document.querySelector(".nav-menu-toggle-btn");

navMenutoggle.addEventListener("click", () => {
  navMenu.classList.toggle("active-menu");
});

subMenus.forEach((submenu) => {
  const subMenuParent = submenu.parentNode.firstElementChild;
  subMenuParent.addEventListener("click", (e) => {
    e.stopPropagation();
    e.target.blur();
    subMenuParent.parentNode.classList.toggle("active-submenu");
  });
});

const navCloseButton = document.querySelector(".nav-close-btn ");

navCloseButton.addEventListener("click", () => {
  navMenu.classList.remove("active-menu");
  closeAllSubmenues();
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav-menu")) {
    navMenu.classList.remove("active-menu");
    closeAllSubmenues();
  }
});

const closeAllSubmenues = () => {
  const openSubmenues = navMenu.querySelectorAll(".active-submenu");
  openSubmenues.forEach((submenu) => {
    submenu.classList.remove("active-submenu");
  });
};

// search
const searchButton = document.querySelector(".search-box-btn");
const searchInputBox = document.querySelector(".search__input-box");

searchButton.addEventListener("click", () => {
  searchInputBox.classList.toggle("active-search");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-box")) {
    searchInputBox.classList.remove("active-search");
  }
});

// slider
const sliderImages = document.querySelectorAll(".slider__image__container");
const sliderButtons = document.querySelectorAll(".carousel__button");

sliderButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const indexOffset = button.classList.contains("next") ? 1 : -1;
    const activeSlide = button.parentNode.querySelector(".active-slide");
    let newIndex = [...sliderImages].indexOf(activeSlide) + indexOffset;
    if (newIndex < 0) newIndex = sliderImages.length - 1;
    if (newIndex >= sliderImages.length) newIndex = 0;
    activeSlide.classList.remove("active-slide");
    sliderImages[newIndex].classList.add("active-slide");
  })
);
