const signIn = document.getElementById("signin");
const signInButton = document.getElementById("signin__btn");
const welcomeMessage = document.getElementById("welcome");
const userID = document.getElementById("user_id");

// для вывода ошибки
const error = document.createElement("div");
error.style.color = "red";
signIn.insertAdjacentElement("afterEnd", error);
let errorTimeout;

// слушаем событие авторизации
document.forms.signin__form.addEventListener("submit", e => {
    e.preventDefault();
    // определяем введённые данные
    const loginInput = document.getElementsByName("login");
    const passwordInput = document.getElementsByName("password");

    // если логин не введён
    if (loginInput["0"].value.length === 0) {
        return showError("Логин не введён!");
    }

    // если пароль не введён
    if (passwordInput["0"].value.length === 0) {
        return showError("Пароль не введён!");
    }

    // формируем отправку данных
    const xhr = new XMLHttpRequest();
    const formData = new FormData(document.forms.signin__form);
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.send(formData);

    xhr.onload = () => {
        if (xhr.readyState === xhr.DONE) {
            const response = JSON.parse(xhr.response); // преобразуем данные с сервера
            if (response.success === false) {
                showError("Пользователь с указанными данными не найден!");
            } else {
                localStorage.auth = response.user_id;
                checkAuth();
            }
        }
    };
});

// проверяем, авторизован ли пользователь
function checkAuth() {
    if (localStorage.auth !== undefined) {
        signIn.classList.remove("signin_active");
        userID.textContent = localStorage.auth;
        welcomeMessage.classList.add("welcome_active");
    }
}

checkAuth();

// показать ошибку и удалить через 4 секунды
function showError(message) {
    error.textContent = message;
    clearTimeout(errorTimeout);
    errorTimeout = setTimeout(() => error.textContent = "", 4000);
}
