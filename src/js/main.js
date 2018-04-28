import "../scss/main.scss";

window.addEventListener('load', function () {
    NodeList.prototype.forEach = Array.prototype.forEach;

    var menu = document.querySelector('.top-menu__menu');
    var menuIcon = document.querySelector('.menu__svg');
    var menuClose = document.querySelector('.menu__close-svg');
    var mobileMenu = document.querySelector('.mobile-menu');
    var topMenu = document.querySelector('.top-menu');

    var addToCart = document.querySelectorAll(".js-add-to-cart");
    var modal = document.querySelector(".modal");

    menu.addEventListener('click', (event) => {
        topMenu.classList.toggle('top-menu--mobile');
        menuIcon.classList.toggle('menu__svg--invisible');
        menuClose.classList.toggle('menu__close-svg--visible');
        mobileMenu.classList.toggle('mobile-menu--visible');


    });

    addToCart.forEach(el => {
        el.addEventListener('click', (event) => {
            modal.style.display = 'block';
            var modalWindow = modal.querySelector('.modal__window');
            var height = modalWindow.style.height.slice(0,-2);
            modalWindow.style.top = Math.round(window.pageYOffset) + "px";
        });
    });


    modal.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal') || event.target.classList.contains('modal__button')) {
            event.preventDefault();
            modal.style.display = 'none';
        }
    });
});