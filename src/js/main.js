import "../scss/main.scss";

window.addEventListener('load', function () {
    NodeList.prototype.forEach = Array.prototype.forEach;

    var menu = document.querySelector('.top-menu__menu');
    var menuIcon = document.querySelector('.menu__svg');
    var menuClose = document.querySelector('.menu__close-svg');
    var mobileMenu = document.querySelector('.mobile-menu');
    var topMenu = document.querySelector('.top-menu');

    menu.addEventListener('click', (event) => {
        topMenu.classList.toggle('top-menu--mobile');
        menuIcon.classList.toggle('menu__svg--invisible');
        menuClose.classList.toggle('menu__close-svg--visible');
        mobileMenu.classList.toggle('mobile-menu--visible');

        
    });
});