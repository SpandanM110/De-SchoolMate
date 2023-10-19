// This is a JavaScript function called "login"
// When called, it opens a new window to the specified URL

function login() {
    window.open("./Frontend/Feature Menu/index.html")
}

// Menu toggle in Mobile view 
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const menuLinks = document.querySelector(".menu-links");

mobileMenuIcon.addEventListener("click", () => {
    menuLinks.classList.toggle("active");
    menuLinks.classList.toggle("menu-collapsed");
});

// JavaScript in a script tag or external JS file
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-scroll');
    const links = document.querySelectorAll('.navbar-scroll a');
    const logo = document.querySelector('.logo-text');
    const bar = document.querySelectorAll('.bar');
    const menulinks = document.querySelector('.menu-links');

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#fff';
        logo.style.color = '#000';
        menulinks.style.backgroundColor = '#fff';
        bar.forEach(e => {
            e.style.backgroundColor = '#3c4758';
        })
        links.forEach(link => {
            link.style.color = '#000';
        });
    } else {
        navbar.style.backgroundColor = 'transparent';
        menulinks.style.backgroundColor = 'transparent';
        logo.style.color = '#fff';
        bar.forEach(e => {
            e.style.backgroundColor = '#fff';
        })
        links.forEach(link => {
            link.style.color = '#fff';
        });
    }
});