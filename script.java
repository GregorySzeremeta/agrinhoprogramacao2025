document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('.scroll');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Hamburger Menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    
    hamburgerMenu.addEventListener('click', function () {
        mainNav.classList.toggle('active');
    });
});
