let map;
function initMap() {
  const centerPosition = { lat: 29.025885, lng: -13.602853 };
  const mainPosition = { lat: 29.12960607069736, lng: -13.60995008872115 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: centerPosition,
    zoom: 11,
    styles: [
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            lightness: 100,
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#C6E2FF",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#C5E3BF",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#D1D1B8",
          },
        ],
      },
    ],
    disableDefaultUI: true,
  });
  const svgMarker = {
    path: "M28.3962 70C28.3962 70 56.7925 44.079 56.7925 28.3962C56.7925 12.7134 44.079 0 28.3962 0C12.7134 0 0 12.7134 0 28.3962C0 44.079 28.3962 70 28.3962 70Z",
    fillColor: "#00B2A0",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 1,
    anchor: new google.maps.Point(30, 60),
  };
  new google.maps.Marker({
    position: mainPosition,
    map,
    title: "Hello World!",
    icon: svgMarker,
  });
}

window.initMap = initMap;

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

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,

  spaceBetween: 0,
  centeredSlides: true,
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".next-slide",
    prevEl: ".prev-slide",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
    },
  },
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