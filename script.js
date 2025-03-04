// Add footer year dynamically
document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    document.getElementById('footerYear').textContent = `© ${year} Fashion Trends. All rights reserved.`;
});
