let cards = document.querySelectorAll(".heroes_wrapper_item");
const body = document.getElementsByTagName('body')[0];
cards.forEach((card) => {
    card.addEventListener("click", function() {
        card.classList.toggle("active");
    });
});

function toggleMenu () {
    const menu = document.querySelector('.menu');
    const menuItem = document.querySelectorAll('.menu_item');
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
    menuItem.forEach(item => {
      hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
    });
    document.body.classList.toggle('no_scroll');
}
