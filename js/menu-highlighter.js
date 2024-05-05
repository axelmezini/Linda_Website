document.addEventListener("DOMContentLoaded", function() {
    const sections= document.querySelectorAll('div[id]');
    const navItems= document.querySelectorAll('nav ul li');

    function highlightNavItem() {
        let scrollY= window.scrollY;

        sections.forEach(currentSection=> {
            const sectionHeight= currentSection.offsetHeight;
            const sectionTop= currentSection.offsetTop - 60;
            const sectionId= currentSection.getAttribute('id').split("-")[0];

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItems.forEach(navItem=> {
                    const link= navItem.querySelector('a');
                    if (link.getAttribute('href').slice(1) === sectionId) {
                        link.classList.add('selected');
                    } else {
                        link.classList.remove('selected');
                    }
                });
            }
        });
    }
    window.addEventListener('scroll', highlightNavItem);
});
