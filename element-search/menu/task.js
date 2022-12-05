let menu__link = document.getElementsByClassName('menu__link');


menu__link = Array.from(menu__link);

menu__link.forEach(el => {
    el.onclick = () => {
        const parent = el.closest('.menu__item');
        const menu_sub = parent.querySelector('.menu');
        menu_sub.classList.add('menu_active');
        return false;
    }
});
