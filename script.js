document.addEventListener('DOMContentLoaded', () => {
    // Egyszerű interakció: Termékek kiemelése hover eseményre
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        product.addEventListener('mouseover', () => {
            product.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });

        product.addEventListener('mouseout', () => {
            product.style.boxShadow = 'none';
        });
    });

    // Gomb hozzáadása a termékekhez
    products.forEach(product => {
        const button = document.createElement('button');
        button.textContent = 'Kosárba';
        button.style.marginTop = '10px';
        button.addEventListener('click', () => {
            alert('A termék a kosárba került!');
        });
        product.appendChild(button);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');

    hamburgerMenu.addEventListener('click', () => {
        if (mobileNav.style.display === 'flex') {
            mobileNav.style.display = 'none';
        } else {
            mobileNav.style.display = 'flex';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Kosárba gomb funkció
    const addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('A termék a kosárba került!');
        });
    });
});
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
