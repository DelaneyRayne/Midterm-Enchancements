// Surprise Trend Button Interaction
document.getElementById('surpriseButton').addEventListener('click', function() {
    document.getElementById('surpriseText').style.display = 'block';
});

// Rotating Banner (Simulated)
const bannerImages = ['image.banner.jpeg', 'image2.jpg', 'image3.jpg'];
let currentImage = 0;
setInterval(() => {
    currentImage = (currentImage + 1) % bannerImages.length;
    document.getElementById('bannerImage').src = bannerImages[currentImage];
}, 3000);
