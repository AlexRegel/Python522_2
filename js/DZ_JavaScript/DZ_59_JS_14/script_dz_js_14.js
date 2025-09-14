// DZ_59 (index_dz_59_js_14.html)

// Задание: Добавить аналогичную часть для вычисления по курсу евро

let inputRub = document.querySelector("#rub");
let inputUsd = document.querySelector("#usd");
let inputEuro = document.querySelector("#euro");

inputRub.addEventListener("input", () => {  // обрабатываем слушатель события ввода данных ("input")
    let request = new XMLHttpRequest(); // Выполним HTTP-запросов к серверу для получения ответа без перезагрузки страницы (технология AJAX)
    request.open("GET", "current.json");  // Инициализация запроса, получение методом "GET" данных из json-файла
    // отправляем HTTP-заголовок для настройки запроса к серверу:
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();  // отправляем данные запроса
    // readystatechange
    request.addEventListener("load", () => {  // загружаем данные методом "load", с проверкой условия
        if (request.status == 200) {
            console.log(request.response);
            let data = JSON.parse(request.response);  // преобразование данных из объекта JSON в JS
            console.log(data);  // Произведём вычисление по курсу (указанному в JSON), находящемуся в data:
            inputUsd.value = (inputRub.value / data.current[0].usd).toFixed(2);
            inputEuro.value = (inputRub.value / data.current[1].euro).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
            inputEuro.value = "Что-то пошло не так";
        }
    })
});
