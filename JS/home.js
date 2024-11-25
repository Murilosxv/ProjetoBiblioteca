document.addEventListener('DOMContentLoaded', function() {
    // Carousel Navigation
    const carousels = document.querySelectorAll('.book-carousel');
    
    carousels.forEach(carousel => {
        const prevBtn = carousel.parentElement.querySelector('.prev');
        const nextBtn = carousel.parentElement.querySelector('.next');
        
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: -300, // Move para a esquerda
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: 300, // Move para a direita
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
