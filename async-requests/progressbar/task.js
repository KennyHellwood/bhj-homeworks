const progress = document.getElementById('progress');

document.forms.form.addEventListener("submit", e => {
    e.preventDefault();

    // формируем загрузку файла
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState !== xhr.DONE) {
            progress.value += 0.2; // если файл ещё не загрузился
        } else {
            progress.value = 1; // заполняем полностью, если загрузился
        }
    });

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send();
});
