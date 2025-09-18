// DZ_61 (index_dz_61_js_16.html)

// Задание: вывести в окно браузера все успешно завершённые 
// задачи членов списка, т.е. где ключ "completed": true.

document.querySelector("#load").addEventListener("click", loadUsers);
let ct = 1;  // Подсчёт кликов на кнопку (button)

async function loadUsers() {  // Асинхронная функция
    let url = "https://jsonplaceholder.typicode.com/todos";
    let responce = await fetch(url);  // Ответ сервера, после загрузки данных
    let data = await responce.json();   // Преобразование данных из JSON в JS-объект
    let ul = document.querySelector("#list");  // Получение доступа к тегу 'ul'
    // Создание двух тегов 'li' для обозначения начала и конца списка данных (массива):
    let li = document.createElement('li'), li1 = document.createElement('li');
    li.textContent = "Начало списка пользователей.";  // Шапка списка (для удобочтения)
    li1.textContent = "Окончание списка пользователей.";  // (для удобочтения)
    let count = 0;  // перемнная для подсчёт количества незавершённых задач (в консоль)
    let html = data.map(function (item) {  // проход по JS-объекту методом '.map(f(i){}')
        if (item.completed === true) {  // Условие для вывода данных
            return "<li>" + "Пользователь: " + item.userId + " выполнил задачу № " + item.id + " ("
                + item.title + ") ||| Статус задачи: " + item.completed + "</li>";
        } else {
            count++;  // Подсчёт количества незавершённых задач
        }
    })
    console.log("Общее кол-во незавершённых задач: " + count);
    ul.insertAdjacentHTML("afterbegin", html.join(" "));
    ul.prepend(li);  // Добавим шапку (тег 'li') в начало элементов тега 'ul'
    // --------- Обозначим конец списка и/или покажем в консоле количество кликов ---------
    let items = ul.querySelectorAll('li');
    let found = false;

    for (let item of items) {  // Поиск окончания (на случай повторных кликов)
        if (item.textContent.includes("Окончание списка пользователей")) {
            found = true;
            break;
        }
    }

    if (found) {
        ct++;  // Количество кликов
        console.log(`Повторное создание списка. Количество кликов: ${ct}`);
    } else {
        ul.appendChild(li1);  // Добавим завершение (тег 'li') в конец всех элементов тега 'ul'
    }
}
// можно также ограничить список

//----------------------------------------
// Просто выведенная на страницу таблица(список пользователей):
/* async function loadUsers() {
    let url = "https://jsonplaceholder.typicode.com/todos";
    let responce = await fetch(url);
    let data = await responce.json();
    // let ul = document.querySelector("#list");
    let count = 0;  // Подсчёт количества завершённых задач
    let count1 = 0;  // Подсчёт количества незавершённых задач
    let html = data.map(function (item) {
        if (item.completed === true) {
            count++;
            return "<li>" + count + " ||| " + item.userId + " ||| " + item.id + " ||| "
                + item.title + " ||| " + item.completed + "</li>";
        } else {
            count1++;
        }
        // console.log("Незавершённая задача: " + count1);
    })
    console.log("Общее кол-во незавершённых задач: " + count1);
    document.querySelector("#list").insertAdjacentHTML("afterbegin", html.join(" "));  // .join(" ")
} */
