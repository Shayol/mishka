import "../scss/main.scss";
import L from "leaflet";
import marker from "../img/marker.svg";

window.addEventListener('load', function () {

    NodeList.prototype.forEach = Array.prototype.forEach;

    var menu = document.querySelector('.top-menu__menu');
    var menuIcon = document.querySelector('.menu__svg');
    var menuClose = document.querySelector('.menu__close-svg');
    var mobileMenu = document.querySelector('.mobile-menu');
    var topMenu = document.querySelector('.top-menu');

    var addToCart = document.querySelectorAll(".js-add-to-cart");
    var modal = document.querySelector(".modal");

    var playButton = document.querySelector(".production-video__custom-ytb-button");

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
            var height = modalWindow.style.height.slice(0, -2);
            modalWindow.style.top = Math.round(window.pageYOffset) + "px";
        });
    });

    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target.classList.contains('modal') || event.target.classList.contains('modal__button')) {
                event.preventDefault();
                modal.style.display = 'none';
            }
        });
    }



    if (document.querySelector("#map")) {
        var map = L.map('map', {
            center: [51.505, -0.09],
            zoom: 13
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var myIcon = L.icon({
            iconUrl: marker,
            iconSize: [68, 101],
            iconAnchor: [34, 101],
        });
        L.marker([51.505, -0.09], { icon: myIcon }).addTo(map);
    }


    if (playButton) {
        var tag = document.createElement('script');
        tag.id = 'iframe-demo';
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;
        window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
            player = new YT.Player('production-video', {
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        playButton.addEventListener('click', () => {
            player.playVideo();
        });

        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
                playButton.style.display = 'inline-block';
            }
            if (event.data == YT.PlayerState.PLAYING) {
                playButton.style.display = 'none';
            }
        }
    }


});