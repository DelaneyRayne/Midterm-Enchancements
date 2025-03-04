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

setInterval(nextSlide, 3000); // Change slide every 3 seconds
showSlide(currentSlide); // Show first slide initially

// Footer Enhancement - Fade In & Dynamic Year
window.addEventListener('load', () => {
    const footer = document.getElementById('footer');
    const footerYear = document.getElementById('footerYear');

    footer.style.opacity = '1'; // Fade in on load
    const year = new Date().getFullYear();
    footerYear.textContent = `© ${year} Fashion Trends. All rights reserved.`;
});
