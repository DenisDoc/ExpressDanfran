"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const outOfRangeClick = document.querySelector(".theheader");

const closeModal = function () {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
};

hamburger.addEventListener("click", function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

document.addEventListener("scroll", function () {
  if (window.scrollY) {
    closeModal();
  }
});
