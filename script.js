const adImages = [
    'images/ad1.jpg',
    'images/ad2.jpg',
    'images/ad3.jpg'
];

let currentAdIndex = 0;

function rotateAd() {
    currentAdIndex = (currentAdIndex + 1) % adImages.length;
    document.querySelector('.adImage').src = adImages[currentAdIndex];
}
