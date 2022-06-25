let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let slideContainer = document.querySelector(".slide");
let slideChildren = slideContainer.children;
let slideChildrenLength = slideChildren.length;

let index = 0;

prevBtn.addEventListener("click", () => slideContent("next"));
nextBtn.addEventListener("click", () => slideContent("prev"));

function slideContent(direction) {
  if (direction === "next") {
    index++;
    if (index === slideChildrenLength) {
      index = 0;
    }
  } else {
    if (index === 0) {
      index = slideChildrenLength - 1;
    } else {
      index--;
    }
  }
  for (let i = 0; i < slideChildren.length; i++) {
    slideChildren[i].classList.remove("show");
  }
  slideChildren[index].classList.add("show");
}

// NavMenu Functions

let navToggle = document.querySelector(".nav-toggle");
let menuList = document.querySelector(".list-menu");

navToggle.addEventListener("click", showMenu);

function showMenu() {
  let visibility = menuList.getAttribute("data-visible");
  if (visibility === "false") {
    menuList.setAttribute("data-visible", true);
    navToggle.setAttribute("data-visible", true);
  } else {
    menuList.setAttribute("data-visible", false);
    navToggle.setAttribute("data-visible", false);
  }
}

// Click tab and Show Contents goes here

let tabs = document.querySelectorAll(".tabs");
let tabContents = document.querySelectorAll(".contents");

tabs.forEach((elem) => elem.addEventListener("click", showContents));

function showContents() {
  removeBg();
  removeShow();
  this.classList.add("gray-bg");
  let content = document.querySelector(`#${this.id}-content`);
  content.classList.add("show-content");
}

function removeBg() {
  tabs.forEach((elem) => elem.classList.remove("gray-bg"));
}

function removeShow() {
  tabContents.forEach((elem) => elem.classList.remove("show-content"));
}

let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let minusTwo = document.querySelector(".minus-2");
let plusTwo = document.querySelector(".plus-2");
let sum = document.querySelector(".zero");
let sumTwo = document.querySelector(".zero-2");
let btn = document.querySelector(".orange-2");
let cart = document.querySelector(".cart");
let container = document.querySelector(".header-logos");

let counter = 0;

minus.addEventListener("click", () => increment("minus"));
plus.addEventListener("click", () => increment("plus"));
minusTwo.addEventListener("click", () => increment("minus"));
plusTwo.addEventListener("click", () => increment("plus"));
btn.addEventListener("click", showNumber);

function increment(direction) {
  if (direction === "plus") {
    counter++;
  } else {
    if (counter > 0) {
      counter--;
    }
  }
  sum.innerHTML = `${counter}`;
  sumTwo.innerHTML = `${counter}`;
}

function showNumber() {
  let text = document.createElement("p");
  text.className = "text";
  text.innerHTML = `${counter}`;
  if (counter == 0) {
    counter++
  }
  container.appendChild(text);
}
