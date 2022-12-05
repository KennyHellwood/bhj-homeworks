const tab = Array.from(document.querySelectorAll('.tab'));
const tab__content = Array.from(document.querySelectorAll('.tab__content'));

let currentElement = 0;

tab.forEach((el, i) => {
    el.onclick = () => {
        tab[currentElement].classList.remove('tab_active');
        tab__content[currentElement].classList.remove('tab__content_active');
        el.classList.add('tab_active');
        tab__content[i].classList.add('tab__content_active');
        currentElement = i;
    }
});
