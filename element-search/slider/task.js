let slider__arrow = document.getElementsByClassName('slider__arrow');
let slider__items = document.getElementsByClassName('slider__item');

slider__items = Array.from(slider__items);

let sliderCount = 0;

slider__arrow[0].onclick = () => { // prev
    slider__items[sliderCount].classList.remove('slider__item_active');
    (sliderCount === 0) ? sliderCount = slider__items.length-1 : sliderCount--;
    slider__items[sliderCount].classList.add('slider__item_active');
}

slider__arrow[1].onclick = () => { // next
    slider__items[sliderCount].classList.remove('slider__item_active');
    (sliderCount === slider__items.length-1) ? sliderCount = 0 : sliderCount++;
    slider__items[sliderCount].classList.add('slider__item_active');
}
