document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 100;
        document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    }

    function moveSlide(step) {
        showSlide(currentSlide + step);
    }

    // Automatically move the slide to the left every 5 seconds
    setInterval(() => {
        moveSlide(1);
    }, 5000);

    // Initialize the first slide
    showSlide(currentSlide);

    // If you want to add event listeners for buttons, make sure they exist in the DOM
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (prevButton) {
        prevButton.addEventListener('click', () => moveSlide(-1));
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => moveSlide(1));
    }
});
// Function to display images


