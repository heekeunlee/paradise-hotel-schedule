function showDay(dayNumber) {
    // Update tabs
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach((btn, index) => {
        if (index + 1 === dayNumber) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update content
    const contents = document.querySelectorAll('.day-content');
    contents.forEach((content, index) => {
        if (index + 1 === dayNumber) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

    // Vibrate on mobile for tactile feedback if supported
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(10);
    }
}

// Optional: Add simple scroll animation listener
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item, .info-card, .cta-card').forEach(el => {
        observer.observe(el);
    });
});
