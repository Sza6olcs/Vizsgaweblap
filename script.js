document.addEventListener('DOMContentLoaded', () => {
    // Termékek kiemelése hover eseményre
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
        button.style.marginTop = '0.5rem';
        button.addEventListener('click', () => {
            alert('A termék a kosárba került!');
        });
        product.appendChild(button);
    });
});
;
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');

   

// Kosárba gomb funkció
const addToCartButtons = document.querySelectorAll('.product button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('A termék a kosárba került!');
    });
});
});
   // Hamburger menü
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
    // Bezárja a menüt ha a háttérre kattintunk
const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", () => {
  hamMenu.classList.remove("active");
  offScreenMenu.classList.remove("active");
});

// Lap tetejére gomb
let mybutton = document.getElementById("totop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

