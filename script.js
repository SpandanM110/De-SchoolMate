// This is a JavaScript function called "login"
// When called, it opens a new window to the specified URL

function login() {
    window.open("./Frontend/Feature Menu/index.html")
}

// Menu toggle in Mobile view
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const icon = document.querySelector(".fa-solid");
const menuLinks = document.querySelector(".menu-links");

mobileMenuIcon.addEventListener("click", () => {
    menuLinks.classList.toggle("active");
    menuLinks.classList.toggle("menu-collapsed");

    icon.classList.toggle("fa-x");
    icon.classList.toggle("fa-bars");
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

//js file for the back to top button
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}