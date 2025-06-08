// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Function to handle scroll animations
function handleScrollAnimations() {
    // Only target elements within the about section
    const aboutSection = document.getElementById('about');
    if (!aboutSection) return;
    
    const elements = aboutSection.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('active');
        }
    });
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initial check for elements in viewport
    handleScrollAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimations);
}); 