document.addEventListener('DOMContentLoaded', function() {
    // Carousel Navigation
    const carousels = document.querySelectorAll('.book-carousel');
    
    carousels.forEach(carousel => {
        const prevBtn = carousel.parentElement.querySelector('.prev');
        const nextBtn = carousel.parentElement.querySelector('.next');
        let scrollAmount = 0;
        
        prevBtn.addEventListener('click', () => {
            scrollAmount = Math.max(scrollAmount - 300, 0);
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', () => {
            scrollAmount = Math.min(scrollAmount + 300, carousel.scrollWidth - carousel.clientWidth);
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    });
    
    // Add hover effect to book cards
    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});