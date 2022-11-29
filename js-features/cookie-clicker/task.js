const clickerCookie = document.getElementById("cookie");
const clickerElement = document.getElementById("clicker__counter");

let clickerValue = parseInt(clickerElement.textContent);

clickerCookie.onclick = () => {
    if (!isNaN(clickerValue)) {
        clickerElement.textContent = String(++clickerValue);

        (clickerValue % 2 !== 0) ? clickerCookie.setAttribute('width', 220) : clickerCookie.setAttribute('width', 200);
    } else {
        alert("Кликер сломался! Обратитесь к администратору ресурса.");
    }
}
