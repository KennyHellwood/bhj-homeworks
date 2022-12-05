const modal = document.getElementById('modal_main');
let modal_close = document.getElementsByClassName('modal__close_times');
const modal_success = document.getElementById('modal_success');
const show_success = document.getElementsByClassName('show-success');

modal.classList.add('modal_active');
modal_close = Array.from(modal_close);

modal_close.forEach(el => {
    el.onclick = () => {
        if (modal.classList.contains('modal_active')) {
            modal.classList.remove('modal_active');
        }
        if (modal_success.classList.contains('modal_active')) {
            modal_success.classList.remove('modal_active');
        }
    }
});

show_success[0].onclick = () => {
    if (modal.classList.contains('modal_active')) {
        modal.classList.remove('modal_active');
    }
    modal_success.classList.add('modal_active');
}
