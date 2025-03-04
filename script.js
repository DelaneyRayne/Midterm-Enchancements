const adImages = [
    'images/ad1.jpg',
    'images/ad2.jpg',
    'images/ad3.jpg'
];

let currentAdIndex = 0;

function rotateAd() {
    const adImage = document.querySelector('.ad img');
    currentAdIndex = (currentAdIndex + 1) % adImages.length;
    adImage.src = adImages[currentAdIndex];
}
