let slideIndex = 0;
let slides, dots;
let slideInterval;

function initSlideshow() {
  slides = document.getElementsByClassName("slide");
  dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return;

  // Prepare all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.position = "absolute";
    slides[i].style.top = "0";
    slides[i].style.left = "0";
    slides[i].style.width = "100%";
    slides[i].style.height = "100%";
    slides[i].style.opacity = "0";
    slides[i].style.transition = "opacity 1.5s ease-in-out";
    slides[i].style.display = "none";
  }

  // Initially show first slide
  slides[0].style.display = "block";
  slides[0].style.opacity = "1";
  dots[0].classList.add("active");

  startSlideshow();
}

function showSlide(index) {
  // Ensure index wraps around
  index = (index + slides.length) % slides.length;

  // Fade out current slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    dots[i].classList.remove("active");
  }

  // Immediately after fading out, set up next slide
  setTimeout(() => {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // Show new slide
    slides[index].style.display = "block";
    setTimeout(() => {
      slides[index].style.opacity = "1";
    }, 50);
    
    dots[index].classList.add("active");
  }, 1500); // Match the fade-out transition time
}

function startSlideshow() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }

  slideInterval = setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
  }, 10000); // 10 seconds per slide
}

function currentSlide(n) {
  clearInterval(slideInterval);
  slideIndex = n - 1;
  showSlide(slideIndex);
  startSlideshow();
}

document.addEventListener("DOMContentLoaded", initSlideshow);