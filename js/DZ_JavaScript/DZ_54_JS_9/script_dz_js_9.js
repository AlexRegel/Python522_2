// DZ_54 (index_dz_54_js_9.html)

// Задание: Написать скрипт, закрывающий отдельный информационный блок (панели)
// (лошадь, осёл или корова) щелчком мыши по изображению (button_delete_green.png) 
// крестика закрытия панели (инф. блока).

// Получили три способа (для эксперимента), все они рабочие и чем-то подобны:

// 1-й способ (без спец условия не работает, а точнее удаляет все панели):
// Более длинный, т.к. включен блок контроля клика мышью (для тестов).
let RemBtns = document.querySelectorAll(".remove-button");  // Объявление переменной массива кнопок
var divPanes = document.querySelectorAll(".pane");  // Объявление переменной массива панелей (div-блоков)

for (let i = 0; i < RemBtns.length; i++) {
    console.log(`Цикл for, итерация: i = ${i}`);
    RemBtns[i].addEventListener("click", function eventClickBtn(event) {  // Создадим функцию для контроля клика мышью (событие event)
        if (event.type === "click") {  // Условие контроля клика мышью (без него удаляются все блоки)
            RemBtns[i].addEventListener("click", clouse());  // отсылаем на реализацию закрытия панели (блока)
            console.log("Клик кнопкой мыши произведён, блок закрыт," + ` i = ${i}.`);
        }
        function clouse() {
            divPanes[i].remove();  // this.parentNode.remove() или this.remove() - в таком варианте не отработает
            // console.log(`divPanes[i] при i = ${i} в функции (clouse()): ` + divPanes[i]);
        }
    });
    // console.log(`RemBtns[i] при i = ${i} в цикле (for):` + RemBtns[i]);
}


// 2-й способ (более краткий, подобный разобранному на уроке, но с вспомогательной переменной (div-блоков):
/* let RemBtns = document.querySelectorAll(".remove-button");  // Объявление переменной массива кнопок
let divPanes = document.querySelectorAll(".pane");  // Объявление переменной массива панелей (div-блоков)

for (let i = 0; i < RemBtns.length; i++) {
    RemBtns[i].addEventListener("click", function clouse() {
        divPanes[i].remove();  // this.parentNode.remove() - здесь тоже отработает (поэтому можно было без доп. переменной)
        console.log(`divPanes[i] при i = ${i} в функции (clouse()): ` + divPanes[i]);
    });
    console.log(`RemBtns[i] при i = ${i} в цикле (for):` + RemBtns[i]);
} */


// 3-й способ (самый краткий, разобранный на уроке):
/* let RemBtns = document.querySelectorAll(".remove-button");  // Объявление переменной массива кнопок

for (let i=0; i < RemBtns.length; i++){  // 
    RemBtns[i].addEventListener("click", function(){
        // RemBtns[i].parentNode.remove();
        this.parentNode.remove();
        // console.log(`this.parentNode при i = ${i} в цикле (for):` + this.parentNode);
    });
} */
