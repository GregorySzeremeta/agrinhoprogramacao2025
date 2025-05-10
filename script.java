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

    // Product Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            products.forEach(product => {
                if (filter === 'all') {
                    product.style.display = 'block';
                } else {
                    if (product.classList.contains(filter)) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                }
            });
        });
    });

    // Login Form Submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (email && password) {
            alert('Login bem-sucedido');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
