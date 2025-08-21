document.addEventListener("DOMContentLoaded", () => {
  //navigation menu toggle
  const navMenuToggle = document.querySelector(".nav-menu-toggle");
  const navMenuClose = document.querySelector(".navbar-right_close-menu");
  const navMenu = document.querySelector(".navbar-right_menu-container");

  navMenuToggle.addEventListener("click", () => {
    navMenu.classList.add("active");
  });

  navMenuClose.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });

  document.addEventListener("click", (event) => {
    if (
      !navMenu.contains(event.target) &&
      !navMenuToggle.contains(event.target)
    ) {
      navMenu.classList.remove("active");
    }
  }); // navigation scroll

  const nav = document.querySelector(".navbar-right_component");
  const scrollThreshold = window.innerHeight * 0.7;

  const rootStyle = getComputedStyle(document.documentElement);
  const secondaryColor = rootStyle.getPropertyValue("--secondary-color").trim();

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }

  const rgbColor = hexToRgb(secondaryColor);

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const opacity = Math.min(1, scrollPosition / scrollThreshold);

    if (rgbColor) {
      nav.style.backgroundColor = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${opacity})`;
    }
  }); // hero-slider

  const slides = document.querySelectorAll(".hero_slider .w-slide");
  let currentSlideIndex = 0;
  const slideInterval = 4000;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    if (slides[index]) {
      slides[index].classList.add("active");
    }
  }

  function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }

    showSlide(currentSlideIndex);
  }

  setInterval(nextSlide, slideInterval);
});
