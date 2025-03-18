function handleScroll() {
    // animate sections when they come into view
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight / 5 * 4;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        } 
        else {
            section.classList.remove('visible');
        }
    });

    // makes small scroll more box appear on load and disappear when scrolled
    const scrollMore = document.querySelector('.scroll-more');
    if (window.scrollY === 0) {
        scrollMore.classList.add('visible');
    } 
    else {
        scrollMore.classList.remove('visible');
    }   
}

// run scroll handler on page load
document.addEventListener('DOMContentLoaded', handleScroll);

// attach scroll handler to the scroll event
document.addEventListener('scroll', handleScroll);

