// Main JavaScript file

document.addEventListener('DOMContentLoaded', function() {
    // Add scroll animation for elements
    const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
    
    if (animateOnScroll.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animateOnScroll.forEach(element => {
            observer.observe(element);
        });
    }
});