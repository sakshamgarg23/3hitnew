document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    let currentIndex = 0;
    let itemWidth = items[0].offsetWidth;
    let itemsPerView = getItemsPerView();

    function getItemsPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * (itemWidth + 20)}px)`;
    }

    function handleResize() {
        itemWidth = items[0].offsetWidth;
        itemsPerView = getItemsPerView();
        currentIndex = Math.min(currentIndex, items.length - itemsPerView);
        updateCarousel();
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - itemsPerView) {
            currentIndex++;
            updateCarousel();
        }
    });

    window.addEventListener('resize', handleResize);
    updateCarousel();
});
