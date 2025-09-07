// DZ_56 (index_dz_56_js_11.html)

// Задание: Написать приложение подсвечивающее e-mail адреса в тексте.
// Требования:
// - Возможность добавлять сообщения с email-адресами как в гостевой книге
// - Сообщения могут содержать адреса электронной почты
// - Все e-mail подсвечиваются синим цветом
// Реализация:
// Создать html-форму для добавления сообщения:


// Объявим переменную для работы кнопки отправки сообщения:
let addMess = document.querySelector("input[type='button']");
// Создадим слушатель события по клику мыши по кнопке:
addMess.addEventListener('click', messUpd);
// Нипишем функцию, обновляющую сообщение в соответствии с шаблоном:
function messUpd(){  // Сохраним сообщение в переменную:
    let mess = document.querySelector("textarea").value;
    // console.log(mess); // Сохраняем имя отправителя в переменную:
    let nameUser = document.querySelector("input[type='text']").value;
    // console.log(nameUser); // Добавим шаблон (есть два варианта, 2-й краткий):
    let regExpBBMail = /([0-9a-z_.]{2,}@[0-9a-z_.]+\.[a-z]{2,3})/ig;  // развёрнутый
    // let regExpBBMail = /([\w.]+@[\w.]+\.[a-z]{2,3})/ig;  // более краткий шаблон
    // Произведём замену по шаблону для выделения (подсветки) Email-адресов:
    mess = mess.replace(regExpBBMail, "<span style='color: blue'>$1</span>");
    console.log(mess);
    // Для дальнейшего вывода сообщения получим доступ к форме и тегу:
    let frm = document.querySelector("fieldset");  // прикрепили
    // Используя метод 'insertAdjacentHTML()' выведем сообщение после формы:
    frm.insertAdjacentHTML("afterend", `<fieldset>
        <legend>${nameUser}</legend>
        <div>${mess}</div>
        </fieldset>`);  // Один из методов
    // Другой метод с использованием свойства ".innerHTML" - заменяет содержимое.
    /* let frm = document.querySelector("fieldset");
    frm.innerHTML = `<fieldset>
        <legend>${nameUser}</legend>
        <div>${mess}</div>
        </fieldset>`; */
}
// Если использолвать вывод через "document.writeln()", предыдущее содержимое затрётся
    /* document.writeln(`
        <fieldset>
            <legend>${nameUser}</legend>
            <div>${mess}</div>
        </fieldset>
    `); */



