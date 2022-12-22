const xhr = new XMLHttpRequest();

xhr.onload = () => {
    if (xhr.status !== 200) {
        return alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    }
    if (xhr.readyState === xhr.DONE) {
        // скрываем loader
        const loader = document.getElementById("loader");
        loader.classList.remove("loader_active");
        // формируем список валют
        const valutes = JSON.parse(xhr.response).response.Valute; // записываем объект в переменную
        const valutesContainer = document.getElementById("items"); // получаем контейтер для заполнения
        Object.keys(valutes).forEach(key => { // перебираем объект по ключам
            // формируем список валют
            valutesContainer.insertAdjacentHTML("beforeEnd", `
                <div class="item">
                    <div class="item__code">
                        ${valutes[key].CharCode}
                    </div>
                    <div class="item__value">
                        ${valutes[key].Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>
            `);
        });
    }
};

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();
