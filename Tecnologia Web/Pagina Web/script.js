const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');


let currentIndex = 0;
const totalItems = carouselItems.length;


function updateCarousel() {
    const itemWidth = carouselItems[0].offsetWidth; 
    carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}


function moveCarousel(direction) {
    currentIndex += direction;

   
    if (currentIndex < 0) {
        currentIndex = totalItems - 1; 
    } else if (currentIndex >= totalItems) {
        currentIndex = 0; 
    }

    updateCarousel(); 
}


prevButton.addEventListener('click', () => moveCarousel(-1));
nextButton.addEventListener('click', () => moveCarousel(1));


window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);


