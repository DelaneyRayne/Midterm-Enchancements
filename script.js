// Slideshow functionality
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);
showSlide(currentSlide);

// Footer hover effect - Adds dynamic hover class (extra touch)
const footerLinks = document.querySelectorAll('.footer-nav a');
footerLinks.forEach(link => {
    link.addEventListener('mouseenter', () => link.classList.add('hovering'));
    link.addEventListener('mouseleave', () => link.classList.remove('hovering'));
});
