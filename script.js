let slideIndex = 0;
let intervalid; // Variable to store setInterval ID

function moveSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}
document.querySelector('.prev').addEventListener('click', () => {
    moveSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    moveSlide(1);
});
// Function to start autoplay
function startAutoplay() {
    intervalid = setInterval(() => {
        moveSlide(1);
    }, 3000); // Change slide every 3 seconds (adjust as needed)
}

// Function to stop autoplay
function stopAutoplay() {
    clearInterval(intervalid);
}

// Start autoplay when the page loads
startAutoplay();

// Stop autoplay when the carousel is hovered
document.querySelector('.carousel').addEventListener('mouseenter', stopAutoplay);

// Restart autoplay when the carousel is not hovered
document.querySelector('.carousel').addEventListener('mouseleave', startAutoplay);