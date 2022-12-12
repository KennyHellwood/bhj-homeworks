const chatWidget = document.querySelector(".chat-widget");
const chatWidgetSide = document.querySelector(".chat-widget__side");
const chatWidgetInput = document.getElementById("chat-widget__input");
const chatWidgetMessages = document.getElementById("chat-widget__messages");

chatWidgetSide.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active");
});

const robotMessages = [
    "Добрый день! До свидания!",
    "Все операторы заняты! Не пишите нам больше!",
    "Кто тут?",
    "Где ваша совесть?"
];

chatWidgetInput.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        if (chatWidgetInput.value) {
            // формируем время
            const timeObj = {
                hours: new Date().getHours(),
                minutes: new Date().getMinutes()
            };
            // обрабатываем сообщение пользователя
            chatWidgetMessages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">${String(timeObj.hours).padStart(2, '0')}:${String(timeObj.minutes).padStart(2, '0')}</div>
                    <div class="message__text">
                        ${chatWidgetInput.value}
                    </div>
                </div>
            `;
            chatWidgetInput.value = "";
            // обрабатываем ответ робота
            chatWidgetMessages.innerHTML += `
                <div class="message">
                    <div class="message__time">${String(timeObj.hours).padStart(2, '0')}:${String(timeObj.minutes).padStart(2, '0')}</div>
                    <div class="message__text">
                        ${robotMessages[getRandomInt(robotMessages.length-1)]}
                    </div>
                </div>
            `;
        }
    }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
