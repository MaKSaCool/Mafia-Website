let cards = document.querySelectorAll(".heroes_wrapper_item");
const body = document.getElementsByTagName('body')[0];
cards.forEach((card) => {
    card.addEventListener("click", function() {
        card.classList.toggle("active");
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');  
    let width = window.innerWidth || document.documentElement.clientWidth  || document.body.clientWidth;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        if (width <= 767 )  {
            body.classList.toggle('no_scroll');}
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            if (width<= 767)  {
                body.classList.toggle('no_scroll');}
        });
    });
});

