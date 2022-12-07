const fontSizeElement = Array.from(document.querySelectorAll(".font-size"));

function removeClassActive() {
    for (let i = 0; i < fontSizeElement.length; i++) {
        if (fontSizeElement[i].classList.contains("font-size_active")) {
            fontSizeElement[i].classList.remove("font-size_active");
            break;
        }
    }
}

fontSizeElement.forEach(el => {
    el.onclick = () => {
        const parent = el.closest(".book");
        (el.dataset.size !== undefined) ? parent.setAttribute("class", `book book_fs-${el.dataset.size}`) : parent.setAttribute("class", "book");
        removeClassActive();
        el.classList.add("font-size_active");
        return false;
    }
});
