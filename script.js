// Adding interactivity for the sidebar items
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.parentElement.classList.remove('active'));
        item.parentElement.classList.add('active');
    });
});

// Surprise Trend Button functionality
const surpriseButton = document.querySelector('.surprise-btn');
const surpriseContent = document.getElementById('surprise-content');

surpriseButton.addEventListener('click', () => {
    // Toggle visibility of the surprise content
    surpriseContent.style.display = (surpriseContent.style.display === 'none' || surpriseContent.style.display === '') ? 'block' : 'none';
});
