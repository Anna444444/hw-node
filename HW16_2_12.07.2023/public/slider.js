const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('img');
const totalSlides = slides.length;

let currentSlide = 0;

const interval = 3000;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

setInterval(nextSlide, interval);

showSlide(currentSlide);
