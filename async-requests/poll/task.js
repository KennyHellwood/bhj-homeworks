const xhr = new XMLHttpRequest();

xhr.onload = () => {
    if (xhr.status !== 200) {
        return alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    }
    if (xhr.readyState === xhr.DONE) {
        pollTitle = document.getElementById("poll__title"); // получаем поле для вопроса
        pollAnswers = document.getElementById("poll__answers"); // получаем поле для ответов
        // формируем вопрос
        const response = JSON.parse(xhr.response).data; // преобразуем данные с сервера
        pollTitle.textContent = response.title; // заполняем название вопроса
        // заполняем варианты ответов
        response.answers.forEach(el => {
            pollAnswers.insertAdjacentHTML("beforeEnd", `
                <button class="poll__answer">
                    ${el}
                </button>
            `);
        });
    }
};

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

// обработчик клика на кнопку
document.addEventListener("click", e => {
    if (e.target.classList.contains("poll__answer")) { // если произошёл клик по кнопке c ответом
        alert("Спасибо, ваш голос засчитан!");
    }
});
