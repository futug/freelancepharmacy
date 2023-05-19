const header = document.querySelector(".header__inner-bottom");
const headerBottom = header.getBoundingClientRect().bottom + window.scrollY;

function addActiveClasses() {
  document.querySelector(".header__inner-top").classList.add("header__inner-top--active");
  const navLinks = document.querySelectorAll(".header__nav-links");
  navLinks.forEach(function (link) {
    link.classList.add("header__nav-links--active");
  });
}

function removeActiveClasses() {
  document.querySelector(".header__inner-top").classList.remove("header__inner-top--active");
  const navLinks = document.querySelectorAll(".header__nav-links");
  navLinks.forEach(function (link) {
    link.classList.remove("header__nav-links--active");
  });
}

function handleScroll() {
  if (window.innerWidth >= 1024) {
    if (window.scrollY >= headerBottom) {
      addActiveClasses();
    } else {
      removeActiveClasses();
    }
  } else {
    removeActiveClasses();
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);

function typeWriterEffect(textElement, text, speed) {
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

window.addEventListener("load", () => {
  const titleElement = document.querySelector(".header__title");
  const subtitleElement = document.querySelector(".header__subtitle");

  typeWriterEffect(titleElement, "Weed Point", 100);
  typeWriterEffect(subtitleElement, "The best pharmacy", 100);
});

const slides = Array.from(document.querySelectorAll(".flowers__card"));

const popup = document.getElementById("popup");
const popupClose = document.getElementById("popupClose");
const popupPic = document.getElementById("popupPic");
const popupTitle = document.getElementById("popupTitle");
const popupDescribe = document.getElementById("popupDescribe");
const popupPrice = document.getElementById("popupPrice");

function openPopup(index) {
  const slide = slides[index];
  const picSrc = slide.querySelector(".flowers__card-pic").src;
  const title = slide.querySelector(".flowers__card-title").textContent;
  const describe = slide.querySelector(".flowers__card-describe").textContent;
  const price = slide.querySelector(".flowers__card-price").textContent;

  popupPic.src = picSrc;
  popupTitle.textContent = title;
  popupDescribe.textContent = describe;
  popupPrice.textContent = price;

  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
}

slides.forEach((slide, index) => {
  slide.addEventListener("click", () => openPopup(index));
});

popupClose.addEventListener("click", closePopup);

popup.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  const isClickOnSlide = event.target.closest(".flowers__card");
  if (!isClickOnSlide && popup.style.display === "block") {
    popup.style.display = "none";
  }
});

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const burgerBtn = document.querySelector(".burger-menu");
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger-menu--active");
  document.querySelector(".burger-menu__list").classList.toggle("burger-menu__list--active");
});

const showMoreButton = document.getElementById("showMoreButton");
const flowerDescriptions = document.querySelectorAll(".flowers__describe");

showMoreButton.addEventListener("click", () => {
  flowerDescriptions.forEach((description, index) => {
    if (index !== 0) {
      description.style.display = "block";
    }
  });

  showMoreButton.style.display = "none";
});
