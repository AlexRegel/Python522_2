// DZ_58 (index_dz_58_js_13.html)

// Задание: В HTML-разметке создать 9 div-тегов с определёнными id.
// Создать один класс (дочерний не нужен), реализующий 
// загрузку картинок и установку текста. Произвести графическое оформление.

class Header {
    constructor(img, h3) {
        this.src = img;
        this.h3 = h3;
        this.out = "";
    }

    render(id) {
        this.out = `
        <img src="${this.src}" alt="картинка">
        <h3>${this.h3}</h3>
        `;
        
        let dv = document.querySelector(`#${id}`);
        dv.innerHTML = this.out;
        dv.style.display = "flex";
        dv.style.flexDirection = "column";
        dv.style.alignItems = "center";
        dv.style.justifyContent = "center";
        dv.style.textAlign = "center";
    }
}

let img = "https://cdn-icons-png.flaticon.com/128/9417/9417266.png";

var annot = "Работа 24 часа в сутки, 7 дней в неделю, 365 дней в году";
let header = new Header(img, annot);
header.render("header");

// let img2 = "https://cdn-icons-png.flaticon.com/128/9417/9417284.png";
let img2 = "https://cdn-icons-png.flaticon.com/128/16998/16998484.png";

let header2 = new Header(img2, "Нет географических границ");
header2.render("header2");

let img3 = "https://cdn-icons-png.flaticon.com/128/9417/9417269.png";

let header3 = new Header(img3, "Ассортимент");
header3.render("header3");

let img4 = "https://cdn-icons-png.flaticon.com/128/1489/1489596.png";

let header4 = new Header(img4, "Безопасность");
header4.render("header4");

let img5 = "https://cdn-icons-png.flaticon.com/128/17865/17865287.png";

var annot5 = "Сокращение расходов на аренду и персонал";
let header5 = new Header(img5, annot5);
header5.render("header5");

let img6 = "https://cdn-icons-png.freepik.com/128/3135/3135715.png";

let header6 = new Header(img6, "Партнёрские отношения");
header6.render("header6");

let img7 = "https://cdn-icons-png.flaticon.com/128/3929/3929679.png";

let header7 = new Header(img7, "Покупатель всегда на связи");
header7.render("header7");

let img8 = "https://cdn-icons-png.flaticon.com/128/8205/8205405.png";

let header8 = new Header(img8, "Комфортный выбор");
header8.render("header8");

let img9 = "https://cdn-icons-png.flaticon.com/128/4645/4645352.png";

let header9 = new Header(img9, "Удобство оплаты");
header9.render("header9");