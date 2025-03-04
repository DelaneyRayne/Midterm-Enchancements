document.addEventListener('DOMContentLoaded', function() {
    const footerMessage = document.querySelector('.footer-message');

    // Fade in the message on page load
    setTimeout(() => {
        footerMessage.style.opacity = '1';
    }, 500);

    // Add hover animation to all sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar li');

    sidebarLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateX(10px)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateX(0)';
        });
    });
});
