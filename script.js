// Slideshow Logic
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

// Footer Enhancement - Fade In & Dynamic Year
window.addEventListener('load', () => {
    const footer = document.getElementById('footer');
    const footerYear = document.getElementById('footerYear');

    setTimeout(() => {
        footer.style.opacity = '1';
    }, 500);

    const year = new Date().getFullYear();
    footerYear.textContent = `© ${year} Fashion Trends. All rights reserved.`;
});
