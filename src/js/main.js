import "../scss/main.scss";

window.addEventListener('load', function () {

    var products = document.querySelector(".products-list__content");


    var data = [{
        image: '../img/product1.png',
        name: "Зайчик-попрыгайчик",
        info: "Рост 30 см, вес 200 г",
        price: "1 200 руб."
    },
    {
        image: '../../img/product2.png',
        name: "Корзинка для белья",
        info: "Диаметр 15 см, высота 10 см",
        price: "690 руб."
    },
    {
        image: '../../img/product3.png',
        name: "Большая корзинка для игрушек",
        info: "Диаметр 30 см, высота 30 см",
        price: "1 500 руб."
    }];

    data.forEach(item => {
        products.innerHTML += `<a href="#" class="products-list__item product">
                            <div class="product__img"></div>
                            <div class="product__description">
                                <div class="product__name">${item.name}</div>
                                <div class="product__info">${item.info}</div>
                            </div>
                            <div class="product__footer">
                                <div class="product__price">${item.price}</div>
                                <a href="#" class="product__cart cart">
                                    <span class="cart__icon"></span>
                                </a>
                            </div>
                        </a>`

    });
});