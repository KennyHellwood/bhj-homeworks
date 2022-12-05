let btn = document.getElementsByClassName('dropdown__value');

btn = Array.from(btn);

let currentBtn;

btn.forEach((el, i) => {
    el.onclick = () => {
        const parent = el.closest('.dropdown');
        const dropdown__list = parent.querySelector('.dropdown__list');
        dropdown__list.classList.add('dropdown__list_active');
        currentBtn = i;
    }
});

let item = document.getElementsByClassName('dropdown__item');

item = Array.from(item);

item.forEach(el => {
    el.onclick = () => {
        const parent = el.closest('.dropdown__list');
        parent.classList.remove('dropdown__list_active');
        const dropdown__link = el.querySelector('.dropdown__link');
        btn[currentBtn].textContent = dropdown__link.textContent;
        return false;
    }
});
