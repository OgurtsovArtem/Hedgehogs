const slides = document.querySelectorAll('.slider__card');
const container = document.querySelector('.slider__cards');
const buttonBack = document.querySelector('.button__back');
const buttonNext = document.querySelector('.button__next');
let currentSlide = 0;

function goToSlide(n) {
  const cardWidth = slides[currentSlide].offsetWidth();
  const scrollValue = container.scrollLeft();
  currentSlide = (n + slides.length) % slides.length;
  if (container.scrollLeft() !== 0) {
    const e = scrollValue - (cardWidth % 10);
    const a = cardWidth - e;
    container.scrollLeft += a;
  }
  container.scrollLeft += cardWidth;
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}
function previousSlide() {
  goToSlide(currentSlide - 1);
}

buttonNext.addEventListener('click', nextSlide);
buttonBack.addEventListener('click', previousSlide);
