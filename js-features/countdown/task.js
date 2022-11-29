const counterElement = document.getElementById("timer");

// counterElement.textContent = "1000"; // для тестов

let counterValue = parseInt(counterElement.textContent);
counterElement.textContent = formatTime(counterValue);

const counterInterval = setInterval(() => {
    if (!isNaN(counterValue)) {
        counterValue--;
        counterElement.textContent = formatTime(counterValue);

        if (counterValue === 0) {
            clearInterval(counterInterval);
            alert("Вы выиграли!");
        }
    } else {
        alert("Таймер сломался! Обратитесь к администратору ресурса.");
        clearInterval(counterInterval);
    }
}, 1000);

function formatTime(seconds) {
    let formattedHours = Math.floor(seconds / 60 / 60);
    let formattedMinutes = Math.floor(seconds / 60) - (formattedHours * 60);
    let formattedSeconds = seconds % 60;

    let formattedTime = `${String(formattedHours).padStart(2, '0')}:${String(formattedMinutes).padStart(2, '0')}:${String(formattedSeconds).padStart(2, '0')}`;
    return formattedTime;
}
