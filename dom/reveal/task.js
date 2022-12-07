const reveal = document.querySelector(".reveal");

function showElement(el) {
    const { top, bottom } = el.getBoundingClientRect();

    if (bottom < 0 || top > window.innerHeight) {
        if (el.classList.contains("reveal_active")) {
            el.classList.remove("reveal_active");
        }
    } else {
        el.classList.add("reveal_active");
    }
}

window.addEventListener('scroll', () => showElement(reveal));
