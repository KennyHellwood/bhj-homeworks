const editor = document.getElementById("editor");

// записываем в текстовое поле значение, если в локальном хранилище не пусто
function checkLocalStorage() {
    if (localStorage.editorValue !== undefined) {
        editor.value = localStorage.editorValue;
    }
}

checkLocalStorage();

// слушаем ввод в тектовое поле
editor.addEventListener("input", () => {
    localStorage.editorValue = editor.value;
});

// создадим кнопку
function createResetButton() {
    const resetButton = document.createElement("button");
    resetButton.setAttribute("type", "reset");
    resetButton.textContent = "Очистить";

    editor.insertAdjacentElement("afterEnd", resetButton);

    // удаляем содержимое текстового поля и хранилища по клику
    resetButton.addEventListener("click", () => {
        editor.value = "";
        delete localStorage.editorValue;
    });
}

createResetButton();
