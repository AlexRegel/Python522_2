// DZ_54 (index_dz_55_js_10.html)

// Задание: Написать скрипт и форму в html с радиокнопками,
// позволяющими выбрать любую из 5 загадок, а по нажатию кнопки 
// узнать ответ на загадку.

let choose = document.querySelector("input[type='button']");

choose.addEventListener("click", chooseMystery);

function chooseMystery() {
    let frm = document.formMystery.mystery;
    // console.log(frm.length);
    // console.log(`${frm.value}`);
// Первый способ (не возвращает ответ, если ни одна radio-кнопка не выбрана)
    for (let i = 0; i < frm.length; i++) {
        if (frm[i].checked) {
            alert(`${frm[i].value}`);
        }
    }
// Второй способ (возвращает ответ в любом случае, если ничего не выбрано - пустое окно)
    // alert(`${frm.value}`);
}