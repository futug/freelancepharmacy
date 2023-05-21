(function () {
  // Header-related variables
  const header = document.querySelector(".header__inner-bottom");
  const headerBottom = header.getBoundingClientRect().bottom + window.scrollY;
  let isHeaderActive = false;

  // Title and subtitle animation
  const titleElement = document.querySelector(".header__title");
  const subtitleElement = document.querySelector(".header__subtitle");

  // Popup variables
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popupClose");
  const popupPic = document.getElementById("popupPic");
  const popupTitle = document.getElementById("popupTitle");
  const popupDescribe = document.getElementById("popupDescribe");
  const popupPrice = document.getElementById("popupPrice");

  // Slide variables
  const slides = Array.from(document.querySelectorAll(".flowers__card"));

  // Burger menu variables
  const burgerBtn = document.querySelector(".burger-menu");

  // Show more button variables
  const showMoreButton = document.getElementById("showMoreButton");
  const flowerDescriptions = document.querySelectorAll(".flowers__describe");

  // Function to add active classes to header elements
  function addActiveClasses() {
    if (!isHeaderActive) {
      document.querySelector(".header__inner-top").classList.add("header__inner-top--active");
      document.querySelector(".header__logo-link").classList.add("header__logo-link--active");
      const navLinks = document.querySelectorAll(".header__nav-links");

      navLinks.forEach(function (link) {
        link.classList.add("header__nav-links--active");
      });
      isHeaderActive = true;
    }
  }

  // Function to remove active classes from header elements
  function removeActiveClasses() {
    if (isHeaderActive) {
      document.querySelector(".header__inner-top").classList.remove("header__inner-top--active");
      document.querySelector(".header__logo-link").classList.remove("header__logo-link--active");
      const navLinks = document.querySelectorAll(".header__nav-links");
      navLinks.forEach(function (link) {
        link.classList.remove("header__nav-links--active");
      });
      isHeaderActive = false;
    }
  }

  // Function to handle scroll events
  function handleScroll() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1024) {
      if (window.scrollY >= headerBottom) {
        addActiveClasses();
      } else {
        removeActiveClasses();
      }
    } else {
      removeActiveClasses();
    }
  }

  // Function to open the popup and populate it with data
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

  // Function to close the popup
  function closePopup() {
    popup.style.display = "none";
  }

  // Function to handle click events on slides
  function handleSlideClick(event) {
    const slide = event.target.closest(".flowers__card");
    if (slide) {
      const index = slides.indexOf(slide);
      if (index !== -1) {
        openPopup(index);
      }
    }
  }

  // Function to handle click events inside the popup
  function handlePopupClick(event) {
    event.stopPropagation();
  }

  // Function to handle click events outside the popup
  function handleDocumentClick(event) {
    const isClickOnSlide = event.target.closest(".flowers__card");
    if (!isClickOnSlide && popup.style.display === "block") {
      popup.style.display = "none";
    }
  }

  // Function to handle click events on anchor links
  function handleAnchorClick(event) {
    event.preventDefault();
    const blockID = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(blockID);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  // Function to handle click events on the burger menu button
  function handleBurgerClick() {
    burgerBtn.classList.toggle("burger-menu--active");
    document.querySelector(".burger-menu__list").classList.toggle("burger-menu__list--active");
  }

  // Function to handle click events on the "Show More" button
  function handleShowMoreClick() {
    flowerDescriptions.forEach((description, index) => {
      if (index !== 0) {
        description.style.display = "block";
      }
    });

    showMoreButton.style.display = "none";
  }

  // Function to simulate typing effect
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

  // Initialize the functionality
  function init() {
    typeWriterEffect(titleElement, "Weed Point", 100);
    typeWriterEffect(subtitleElement, "The best pharmacy", 100);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    slides.forEach((slide) => {
      slide.addEventListener("click", handleSlideClick);
    });

    popupClose.addEventListener("click", closePopup);

    popup.addEventListener("click", handlePopupClick);

    document.addEventListener("click", handleDocumentClick);

    const anchors = document.querySelectorAll('a[href*="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    burgerBtn.addEventListener("click", handleBurgerClick);

    showMoreButton.addEventListener("click", handleShowMoreClick);
  }

  init();
})();
