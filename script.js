const navbarLinks = document.querySelectorAll(".nav-programs .nav-link");
const programsOpenButton = document.querySelector("#programs-open-button");
const programsCloseButton = document.querySelector("#programs-close-button");
programsOpenButton.addEventListener("click", () => {
  // Toggle mobile programs visibility
  document.body.classList.toggle("show-mobile-programs");
});
// Close programs when the close button is clicked
programsCloseButton.addEventListener("click", () => programsOpenButton.click());
// Close programs when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => programsOpenButton.click());
});
/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});