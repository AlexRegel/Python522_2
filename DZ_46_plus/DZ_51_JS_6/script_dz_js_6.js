// DZ_51 ("Random.pdf" из "JS\JS_4")

/* ` Создаём массив с месяцами, затем в цикле проходимся по длине массива. Для 
получения доступа к элементам "div" не используем id. Либо сами элементы "div", 
либо классы.` */

// Для именования классов (для проверок)
let masMonEn = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

// создаём массив для именования месяцев
let masMonths = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

for (let i = 0; i < masMonths.length; i++) {
    document.writeln("<div></div>");  // " + masMonths[i] + "
    let tagDiv = document.getElementsByTagName("div")[i];
    tagDiv.innerHTML = `${masMonths[i]}`;
    let createColor = () => {
        let r = parseInt(Math.random() * 256);  // Math.floor
        let g = parseInt(Math.random() * 256);
        let b = parseInt(Math.random() * 256);
        // tagDiv.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
        tagDiv.style.background = `rgb(${r}, ${g}, ${b})`;
    }
    createColor();
    tagDiv.style.fontWeight = "bold";
    // let cls = masMonEn[i]  // Можно не создавать, тогда:
    tagDiv.className = `${masMonEn[i]}`;  // cls Классы создал для тестов (к ним не привязано)
    tagDiv.style.textAlign = "center";
    // tagDiv.style.padding = "3px";
    tagDiv.style.margin = "auto";
    tagDiv.style.width = "500px";  //1000px
    tagDiv.style.height = "20px";
    tagDiv.style.alignContent = "center";
    console.log(tagDiv);
}


