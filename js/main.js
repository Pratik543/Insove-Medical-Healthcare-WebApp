const mobileNav = document.querySelector(".mnav");
const mobileNavBtn = document.querySelector(".mnav__btn");
const mobileNavBtnIcon = document.querySelector(".mnav__btn-icon");
const mobileNavLinks = document.querySelectorAll(".mnav a");
console.log(mobileNavLinks);

const navOpenedClass = "left-0";
const navClosedClass = "-left-[300px]";
const arrowLeftClass = "ri-arrow-left-s-line"; //close sign
const arrowRightClass = "ri-arrow-right-s-line"; //open sign

// Function to close the nav
function closeNav() {
  mobileNav.classList.remove(navOpenedClass);
  mobileNav.classList.add(navClosedClass);

  mobileNavBtnIcon.classList.remove(arrowLeftClass);
  mobileNavBtnIcon.classList.add(arrowRightClass);
}

// Toggling mobile nav panel
mobileNavBtn.addEventListener("click", () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.remove(navClosedClass);
    mobileNav.classList.add(navOpenedClass);

    mobileNavBtnIcon.classList.remove(arrowRightClass);
    mobileNavBtnIcon.classList.add(arrowLeftClass);
  } else {
    closeNav();
  }
});

// Close nav when clicking on any nav link
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// faq
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const faqBtn = item.querySelector("faq__btn");

  item.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    const iconClass = isOpen ? "ri-subract-fill" : "ri-add-fill";
    const iconElement = faqBtn.querySelector("i");
    iconElement.classList = `${iconClass} text-2xl`;
  });
});

// scroll reveal animation
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2000,
  delay: 500,
  // reset: true //resets animation
});

// hero
sr.reveal(".hero__text", { origin: "top" });
sr.reveal(".hero__img");

// stats
sr.reveal(".stats__item", {
  delay: 300,
  distance: "100px",
  interval: 100,
  origin: "top",
});

// services
sr.reveal(".services");
sr.reveal(".services__top");
sr.reveal(".services__item", {
  delay: 400,
  distance: "100px",
  interval: 100,
  origin: "bottom",
});

// appointment
sr.reveal(".appointment__title");
sr.reveal(".appointment__form");

// testimonials
sr.reveal(".testimonial");
sr.reveal(".testimonial__container");

// team
sr.reveal(".team__title");
sr.reveal(".team__slider");

// faq
sr.reveal(".faq__title");
sr.reveal(".faq__item", {
  delay: 400,
  distance: "100px",
  interval: 100,
  origin: "bottom",
});

// departments
sr.reveal(".departments__bg");
sr.reveal(".departments__container");

// blogs
sr.reveal(".blog__title");
sr.reveal(".blog__post", {
  delay: 400,
  distance: "100px",
  interval: 100,
  origin: "bottom",
});

// brands
sr.reveal(".brands__logo", {
  delay: 400,
  distance: "100px",
  interval: 100,
  origin: "bottom",
});

//  newsletter
sr.reveal(".newsletter");
sr.reveal(".newsletter__container");

// footer
sr.reveal(".footer__item", {
  delay: 400,
  distance: "100px",
  interval: 100,
  origin: "bottom",
});
