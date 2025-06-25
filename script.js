// Section reveal on scroll (fade-in/slide-in)
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const reveal = () => {
        const trigger = window.innerHeight * 0.85;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < trigger) {
                section.classList.add('visible');
            }
        });
    };
    reveal();
    window.addEventListener('scroll', reveal);
});
