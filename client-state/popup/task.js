const subscribeModal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close_times");

// слушаем нажатие на кнопку закрытия окна
modalClose.addEventListener("click", () => {
    if (subscribeModal.classList.contains('modal_active')) {
        subscribeModal.classList.remove('modal_active');
        setCookie("show", "1");
    }
});

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

// проверяем существуют ли нужные куки
function doesCookieExist(name) {
    const pairs = document.cookie.split("; ");
    const cookie = pairs.find(p => p.startsWith(name + '='));
    if (cookie !== undefined) {
        //return cookie.substr(name.length + 1);
        return true;
    }
    return false;
}

// показываем окно только в случае отсутвия нужной куки
function showSubscribeModal() {
    if (doesCookieExist("show")) {
        return false;
    }
    subscribeModal.classList.add('modal_active');
}

showSubscribeModal();
