// DZ_50 ("2.pdf" из "JS\JS_3")

// False; True;
// let m = +prompt("Введите строку: ")

// let m = 1;
// console.log(m);

/* if(m == 0){
        return console.log("False");
    } else {
        return console.log(m);
    } */


// document.writeln("Текст выведен в браузер");
// document.writeln("<p>Текст <b>выведен</b> в браузер</p>");
// document.writeln("<img src='1.jpg' />");

/* let i = 0;
do {
    document.writeln("Это номер: " + i + "<br>");
    i++;
} while(i < 5); */

// странное дело!!! ----------------------------------------
/* let i = 1;
do {
    if (i == 1) {
        document.writeln("Квадрат: " + i + " равен " + i ** 2 + "<br>");
        i++;
    } else {
        document.writeln("Квадрат: " + ++i + " равен " + i ** 2 + "<br>");
    }

} while (i < 8);

document.writeln("<br>"); */
// странное дело конец!!! ----------------------------------------

/* let j = 1;
do {
    document.writeln("Квадрат: " + j + " равен " + j ** 2 + "<br>");
    j++;
} while (j < 8);

do {
    ch = prompt("Введите число: ", 10);
    if (ch < 0) {
        break;
    }
    pr *= ch;  // pr = pr * ch
} while(true);

alert(pr); */

// let ch, pr=1;

// do{
//     ch = prompt("Введите число: ", 10);
//     if(ch < 0){
//         break;
//     }
//     if(ch == 0){
//         continue;
//     }    
//     pr *= ch;  // pr = pr * ch
// }while(true);

// alert(pr);
// var - ежё один способ инициаллизации переменной вне области видимости

// *****************************************************
/* for (let i = 1; i < 6; i++) {
    document.writeln(i + "<br>");
}

document.writeln("<br><br>Второй цикл:<br><br>");

let j = 1;
while (j < 6) {
    document.writeln(j + "<br>");
    j++;
}

document.writeln("i = " + i + "<br>"); */
// *****************************************************

/* for(let i=0; i<4; i++){
    document.writeln("+++ <br>");
    for(let j=0; j<2; j++){
        document.writeln("-- <br>");
    }
} */

// *****************************************************
/* let tr = prompt("Введите количество строк:");
let td = prompt("Введите количество столбцов:");
let symbol = prompt("Введите символ:");

document.writeln("<table border='1'>");
for(let i=0; i<tr; i++){
    document.writeln("<tr>");
    for(let j=0; j<td; j++){
        document.writeln("<td>" + symbol + "</td>")
    }
    document.writeln("</tr>")
}
document.writeln("</table>"); */
// *****************************************************
/* let arr1 = new Array(2, 6, 8);
let arr2 = new Array(5);

let arr3 = [1, 3, 7];
let arr4 = [5];


console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr4.length);

document.writeln(arr1.length);
alert(arr1); */
// *****************************************************

// document.writeln(arr1.length);
// let f = [1, 2, 3, 4, 5, 6, 7]
// console.log(f);
// console.table(f);
// console.log("Length: ", f.length);

// f.length = 3;
// console.log(f);
// console.log("Length: ", f.length);

// *****************************************************
// let arr = []; и let arr = new Array(); два альтернативных способа создания массива
/* let arr = new Array();
arr[0] = 15;
arr[1] = 20;
arr[2] = 56;
arr[3] = 12;
arr[5] = 6;
console.log(arr);

for(let i=0; i < arr.length; i++){
    document.writeln(arr[i] + "<br>");
} */

// *****************************************************
// Другой способ заполнения массива, метоедом запроса ввода пользователя
/* let arr = new Array(6);

for(let i=0; i < arr.length; i++){
    arr[i] = prompt("Введите " + (i+1) + " элемент массива: ")  // Скобки, чтобы исключить конкатенацию
}

console.log(arr);

for(let i=0; i < arr.length; i++){
    document.writeln(arr[i] + "<br>");
} */
// *****************************************************
/* let text1 = document.getElementById("text_1");
console.log(text1);
console.log(text1.textContent);

text1.textContent = "Новое содержимое <b>с html разметкой</b>";

let text2 = document.getElementById("text_2");
text2.innerHTML = "Новое содержимое <b>с html разметкой</b>"

console.log(text2);
console.log(text2.textContent);
console.log(text2.innerHTML); */
// *****************************************************

/* let res = +prompt("Выберите итзображение", "1-собака, 2-кот, 3-птица, 4-рыба");
document.writeln("<div id='image'></div>");
let img = document.getElementById("image");

switch(res){
    case 1:
        img.innerHTML = "<img src='img/dog.jpg'>";
        break;
    case 2:
        img.innerHTML = "<img src='img/cat.jpg'>";
        break;
    case 3:
        img.innerHTML = "<img src='img/bird.jpeg'>";
        break;
    case 4:
        img.innerHTML = "<img src='img/fish.jpeg'>";
        break;
    default:
        alert("Такого изображения нет");
} */
// *****************************************************

/* let tag = document.getElementsByTagName("p")[2];  // отбращение ко 2-му элементу массива
console.log(tag);
tag.innerHTML = "Hello tag";
tag.style.background = "silver";
tag.style.padding = "20px 10px";
tag.style.color = "blue";
tag.style.fontWeight = "bold";  // '-w' change 'W' in fontWeight

// list-style-type => ListStyleType

tag.id = "test";
tag.class = "x";  // .class -не выдаст ошибку, но не отработает
tag.className = "x";  // .className - рабочий вариант вм. .class */
// *****************************************************

/* let q = document.getElementsByClassName('a');
console.log(q);
q[1].style.color = "red";
q[0].style.color = "blue"; */
// *****************************************************

// document.querySelector(css);
// document.querySelectorAll(css);

// let select_class = document.querySelectorAll(".a");
// let select_class = document.querySelectorAll(".a")[1];
// console.log(select_class); 


// let select_id = document.querySelectorAll("#text_1")[1];
// *****************************************************

/* let el = document.querySelector("h2");
el.style.color = "red";

// let el1 = document.querySelectorAll("h2")[1];
let el1 = document.querySelectorAll("h2");
el1[1].style.color = "purple";

let lists = document.querySelectorAll("li");
console.log(lists.length);

for(let i=0; i<lists.length; i++){
    lists[i].innerHTML += " - фрукты ";
}

let purples = document.querySelectorAll(".purple li");
for(let i=0; i<purples.length; i++){
    purples[i].innerHTML += "!!!";
}

// let m = document.querySelectorAll(".red li")[1];
// m.style.color = "orange";

let m = document.getElementsByClassName("red")[0].getElementsByTagName("li")[1];
m.style.color = "orange"; */
// *****************************************************


// *****************************************************
/* let js = ["нужно", "учить", "JavaScript"];
console.log(js);

console.log(js.pop());
console.log(js);

js.push("JavaScript", "!");
console.log(js);

console.log(js.shift());
console.log(js);

js.unshift("Почему", "нужно");
console.log(js);

// let arr = js.slice(1,3);
// console.log(arr);
// console.log(js);

// console.log(js.slice(1));

js.splice(0, 1);
console.log(js);

js.splice(0, 2, "Мы", "изучаем");
console.log(js);

js.splice(2, 0, "сложный", "язык");
console.log(js);

js.splice(-2, 0, "но", "очень", "интересный");
console.log(js); */
// *****************************************************


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