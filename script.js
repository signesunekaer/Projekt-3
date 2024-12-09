// Alt her er fra chatGPT
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0; // Holder styr på, hvilket slide der vises

// Funktion til at opdatere sliderens position
function updateCarousel() {
  const slideWidth = slides[0].clientWidth; // Bredde på ét slide
  carouselContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Næste knap
nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Gå til første slide igen
  }
  updateCarousel();
});

// Forrige knap
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1; // Gå til sidste slide igen
  }
  updateCarousel();
});

// Sørg for, at slideren tilpasser sig ved resizing
window.addEventListener('