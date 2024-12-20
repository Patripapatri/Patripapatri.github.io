document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const image = section.querySelector('.image');
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight) {
            image.classList.add('visible');
        }
    });
});