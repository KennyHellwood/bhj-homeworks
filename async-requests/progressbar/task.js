const progress = document.getElementById('progress');

document.forms.form.addEventListener("submit", e => {
    e.preventDefault();
    // определяем загруженный файл
    const uploadedFile = document.getElementById('file').files[0];

    // формируем загрузку файла
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = () => {
        progress.value += 0.1; // если файл ещё не загрузился
    };

    xhr.upload.onload = () => {
        progress.value = 1; // заполняем полностью, если загрузился
    };

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send(uploadedFile);
});
