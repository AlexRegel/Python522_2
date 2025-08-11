// DZ_50 ("2.pdf" из "JS\JS_3")

// Выводим div внутри элемента body.
document.writeln("<div id='demonstration'></div>");
// Получаем элемент по идентификатору "demonstration" (одним из 2-х способов).
// let div = document.querySelector("#demonstration");
let div = document.getElementById('demonstration');  // по заданию
div.innerHTML = `Термоста́т — прибор для поддержания постоянной температуры. Поддержание температуры обеспечивается либо за счёт использования терморегуляторов, либо осуществлением фазового перехода (например, таяние льда). Для уменьшения потерь тепла или холода термостаты, как правило, теплоизолируют. Но не всегда. Широко известны автомобильные моторы, где летом нет никакой теплоизоляции и за счёт действия восковых термостатов поддерживается постоянная температура. Другим примером термостата, широко используемого в быту, является холодильник.`;

div.style.background = "yellow";  // #f0f
div.style.color = "black";
div.style.width = "256px";
div.style.height = "256px";
div.style.overflow = "scroll";
div.style.outline = "1px dashed red";

div.className = "resetFont";

let ul = document.querySelector(".resetFont");
ul.style.fontSize="20pt";
ul.style.fontWeight="400";
ul.style.textDecoration="underline";
// ****Предложенные стили (в демонстрации)****
ul.style.listStyleType = 'square';
ul.style.width = '50%';