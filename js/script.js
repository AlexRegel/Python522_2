"use strict";

/* let message;  // let, const, var
message = "Hello";
console.log(message);

let a = 10;
a = 3.5;

let b, c;
let d=5, e=2;


let firstName = "Irina";
console.log(firstName); */

// const week = 7;

// let str1 = "Двойные кавычки";
// let str2 = 'Одинарные кавычки';
// let str3 = `Обратные ${str1} и ${str2}
//     кав   ыч    ки`;

// console.log(str1);
// console.log(str2);
// console.log(str3);

// let firstName = "Ivan";
// alert(`Hello, ${firstName}`);


// let days = 365
// let planet = "Земля"
// let people = '7 млрд'
// let sun = 'Солнце'

// alert(`Мы живем на планете ${planet}, она делает один оборот вокруг ${sun} за ${days}. Население нашей планеты составляет примерно ${people} человек`)

// let res = confirm("Знаете ли вы HTML?");
// console.log(res);  // OK => true  Отмена => false

// if (res) { alert("Пора учить JavaScript"); }
// else { alert("Нужно выучить"); }

/* Типы данных 
- number
- string
- boolean
- null (object) 
- undefined

- Object
*/

// let number = 13;
// console.log(number, typeof number);
// console.log(number, typeof(number));

// let a = 23.56
// console.log(a, typeof(a));

// let b = "Hello"
// console.log(b, typeof(b));

// let c = true
// console.log(c, typeof(c));

// let d = null;
// console.log(d, typeof(d));

// let e = undefined;
// console.log(e, typeof(e));


// let res = prompt("Ваше имя:", "Значение по умолчанию");
// console.log(res);  // OK => string, Отмена => null

// let a = 12;
// let b = 2;

// console.log('+:', a + b);
// console.log('-:', a - b);
// console.log('*:', a * b);
// console.log('/:', a / b);
// console.log('%:', a % b);
// console.log('**:', a ** b);


// let a = "23";
// let b = "6a";
// console.log(a - b);  // NaN 


// let a = +prompt("Введите первое число:", 5);
// let b = parseInt(prompt("Введите второе число:", 3));
// // a = parseInt(a);
// // b = parseInt(b);
// alert("Результат: " + (a + b));


// console.log(parseInt("21.84"));  // 21
// console.log(parseFloat("21.84"));  // 21.84
// console.log(parseFloat("21.84123").toFixed(2));
// console.log(Number("21.84"));  
// console.log(+"21.84");  
// // console.log(+1*"21.84"); 
// console.log(+true);   
// console.log(+false);   

// let a = 0, b = 0;
// a++;  // a += 1
// b--;  // a -= 1
// console.log(a);
// console.log(b);

// let a = 0, b = 0;
// ++a;
// b++;
// console.log(a);
// console.log(b);


// let a = 0, b = 0;
// let c = a++ + 2;  // 2 = 0 + 2, a = 1
// let d = ++b + 2;  // 3 = 1 + 2
// console.log(a);  // 1
// console.log(b);  // 1
// console.log(c);  // 2
// console.log(d);  // 3

// let a = 1;
// let b = a++;  // b = 1, a = 2
// let c = b + 5 + a;  // c = 1 + 5 + 2
// console.log(c);  // 8

// a++ или a += 1 или a = a + 1

// let a = 1;
// let b = ++a;  // b = 2, a = 2
// let c = b + 5 + a;  // c = 2 + 5 + 2
// console.log(c);  // 9

// let num = 10;

// num += 5;
// console.log(num);  // 15

// num -= 7;
// console.log(num);  // 8

// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 <= 5);
// console.log(5 >= 5);
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 != "5");
// console.log(5 !== "5");

// 7 < 3 ? alert("7") : alert("3");

// let ch = prompt("Угадайте число от 1 до 10");
// let num = 7;
// // (ch == num) ? alert("Угадали") : alert("Не угадали");
// (ch == num) ? alert("Угадали") : ((ch < num) ? alert("Загаданное число больше") : alert("Загаданное число меньше"));

// if (условие){
//     блок истина
// } else {
//     блок ложь
// }

/* 
false => 0, 0.0, "", false, null, undefined, NaN
*/

// let a = null;
// console.log(a);

// if (a){
//     console.log("TRUE");    
// } else {
//     console.log("FALSE");    
// }

// let a = +prompt("Введите первое число:", 5);
// let b = +prompt("Введите второе число:", 0);

// if(b != 0)
//     alert(a / b);  // infinity
// else
//     alert("На 0 делить нельзя");

// let a = 12;
// let b = 12;

// if(a > b){
//     alert(a + " > " + b);
// } 
// if(a < b) {
//     alert(a + " < " + b);
// } 
// if(a == b) {
//     alert(a + " == " + b);
// }

// if(a > b){
//     alert(a + " > " + b);
// } 
// else if(a < b) {
//     alert(a + " < " + b);
// } 
// else {
//     alert(a + " == " + b);
// }

// let login = prompt("Введите логин: ", "admin");
// if(login){
//     if(login == 'admin'){
//         let psw = prompt("Введите пароль");
//         if(psw){
//             if(psw == 'password'){
//                 alert("Добро пожаловать");
//             } else{
//                 alert("Пароль не верен");
//             }
//         } else {
//             alert("Вход отменен");
//         }
//     } else {
//         alert("Я вас не знаю");
//     }
// } else{
//     alert("Вход отменен");
// }

// if(5 == 5 || 5 > 8){
//     console.log("TRUE");    
// } else {
//     console.log("FALSE");    
// }

// console.log(!9);  // 9 => !true => false
// console.log(!0);
// console.log(!!0);
// console.log(!!"Hello");
// console.log(!!"");

// let age = prompt("Введите возраст");
// if (age > 17 && age < 70){
//     alert("Вы можете получать права");
// } else {
//     alert("Права не давать");
// }

// let age = prompt("Введите возраст");
// if (age < 18 || age > 69){
//      alert("Права не давать")
// } else{
//      alert("Вы можете получить права")
// }

// switch (условие){
//     case значение_1:
//         блок кода;
//         break;
//     case значение_n:
//         блок кода;
//         break;
//     default:
//         блок кода;    
// }

// let a = +prompt("Введите число: ");
// switch(a){  // a === 3
//     case 1:
//         alert("Код 1");
//         break;
//     case 2:
//         alert("Код 2"); 
//         break;
//     case 3:
//         alert("Код 3"); 
//         break;  
//     default:
//         alert("Я таких значений не знаю");
// }

// let a = +prompt("Введите результат '2 + 2': ");
// switch (a) {  // a === 3
//     case 4:
//         alert("Верно");
//         break;
//     case 3:
//     case 5:
//         alert("Не верно");
//         break;
//     default:
//         alert("Я таких значений не знаю");
// }

// let m = +prompt("Введите номер месяца");
// let n;
// switch(m){
//     case 1: n="Январь"; break;
//     case 2: n="Февраль"; break;
//     case 3: n="Март"; break;
//     case 4: n="Апрель"; break;
//     case 5: n="Май"; break;
//     case 6: n="Июнь"; break;
//     case 7: n="Июль"; break;
//     case 8: n="Август"; break;
//     case 9: n="Сентябрь"; break;
//     case 10: n="Октябрь"; break;
//     case 11: n="Ноябрь"; break;
//     case 12: n="Декабрь"; break;
//     default: n="Неправильный номер месяца";
// }
// alert("Вы ввели: " + n);

// Занятие 2 JS (49 от начала)

// document.write("Текст введён в браузер")
// document.write("<p>Текст <b>введён</b> в браузер</p>")
// document.write("<img src='1.jpg' />")

// let i = 0;
// do {
//     document.writeln("Это номер: " + i + "<br>");
//     i++;
// } while (i < 5);

// document.writeln("<br><br>Второй цикл: <br>");

// let j = 0;
// while (j < 5){
//     document.writeln("Это номер: " + j + "<br>");
//     j++
// }

/* ++i (префиксный) или i++ (префиксный) */
// let i = 1;
// do {
//     document.writeln("Квадрат: " + ++i + " равен " + i ** 2 + "<br>");
//     // i++;
// } while (i < 8);


// let ch, pr=1;

// do{
//     ch = prompt("Введите число: ", 10);
//     if(ch < 0){
//         break;
//     }
//     if(ch == 0){
//         continue;
//     }
//     pr *= ch; // pr = pr * ch
// } while(true);

// alert(pr);

// for("start; etop; step"){
// тело
// }

// for(let i = 1; i < 6; i++){
//     document.writeln(i + "<br>");
// }

// document.writeln("<br><br>Второй цикл: <br>")

// let j = 1;
// while(j < 5){
//     document.writeln(j + "<br>");
//     j++;
// }

// let i = 1;
// for(; ; ){
//     if(i == 6){
//         break
//     }
//     document.writeln(i + "<br>");
//     i++
// }

// for(let i = 1; i < 6; i++){
//     document.writeln(i + "<br>");
// }

// document.writeln("i = " + i + "<br>");

// for(var i = 1; i < 6; i++){
//     document.writeln(i + "<br>");
// }

// document.writeln("i = " + i + "<br>");

// for(let i = 0; i < 4; i++){
//     document.writeln("+++ <br>");
//     for(let j = 0; j < 2; j++){
//         document.writeln("-- <br>");
//     }
// }

// let tr = prompt("Введите воличество строк:")
// let td = prompt("Введите воличество столбцов:")
// let symbol = prompt("Введите символ")

// document.writeln("<table border='1'>");
// for (let i = 0; i < tr; i++) {
//     document.writeln("<tr>");
//     for (let j = 0; j < td; j++) {
//         document.writeln("<td>" + symbol +"</td>");
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");

// --------------------------------------------------
// для DZ
// document.writeln("<table border='1' width='260'>");
// document.writeln("<tr align='center'>");
// for (le)

// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr aligh='center'>");
//     for (let j = 1; j < 11; j++) {
//         if (i % 2 == 0){
//             document.writeln("<td bgcolor='red'>" + i * j +"</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + i * j +"</td>");
//         }
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");
// // --------------------------------------------------

// document.writeln("<table border='1' width='260'>");
// document.writeln("<tr align='260'>");
// for (let i = 1; i < 11; i++) {
//     document.writeln("<tr aligh='center'>");
//     for (let j = 1; j < 11; j++) {
//         if (i % 2 == 0){
//             document.writeln("<td bgcolor='red'>" + i * j +"</td>");
//         } else {
//             document.writeln("<td bgcolor='yellow'>" + i * j +"</td>");
//         }
//     }
//     document.writeln("</tr>");
// }
// document.writeln("</table>");
// // --------------------------------------------------

// Массив

// let arr1 = new Array(2, 6, 8);
// let arr2 = new Array(5);

// let arr3 = [1, 3, 7]
// let arr4 = [5]


// arr1[5] = 15;
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr3.length);

// document.writeln(arr1);
// alert(arr1)


// let f = [1, 2, 3, 4, 5, 6, 7];
// console.log(f);
// console.log("Length: ", f.length);
// console.table(f);

// f.length = 3;
// console.log(f);
// console.log("Length: ", f.length);

// f.length = 7;
// console.log(f);
// console.log("Length: ", f.length);

// f.length = 0;
// console.log(f);
// console.log("Length: ", f.length);


// let arr = new Array();
// arr[0] = 15;
// arr[1] = 20;
// arr[2] = 25;
// arr[3] = 56;
// // arr[4] = 12;
// arr[5] = 6;
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     document.writeln(arr[i] + "<br>");
// }

// ??????????????????????????????????????????
// let arr = new Array(6);

// for(let i = 0; i < arr.length; i++){
//     arr[i] = prompt("Введите " + i + "'элемент массива: ");
// }

// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     document.writeln(arr[i] + "<br>");
// }
// ??????????????????????????????????????????

// let arr = new Array(2, 6, 7, "Игорь", 1.5, true);
// console.log(arr)

// let mas = [[2,1,1], [6,3,7], [5,5,6]];
// console.log(mas);
// console.table(mas);

// console.log(mas[1][2]);

// document.writeln(mas + "<br>")


/* // -------написали тестик --------------------------------------------
let questions = ["На ноль делить можно?", "Волга впадает в каспийское море?", "Атмосферное давление увеличивается с высотой?", "2х2 будет 8?", "Дельфины это рыбы?", "Мадонна это настоящее имя певицы?", "Первая мировая война началась 1 сентября 1939 года?"];

let correct_answer = [false, true, false, false, false, false, false];

let sum = 0;
let res = new Array();

for (let i = 0; i < questions.length; i++) {
    let answer = confirm(questions[i])
    if (answer == correct_answer[i]) {
        res[i] = 10;
        sum += res[i];
    } else {
        res[i] = 0;
    }
}

console.log(res);
console.log(sum);

document.writeln("<table border='1' width='500'>")

document.writeln("<tr>");
document.writeln("<th>Вопрос</th>");
document.writeln("<th>Баллы</th>");
document.writeln("</tr>");

for (let i = 0; i < questions.length; i++) {
    document.writeln("<tr>");
    document.writeln("<td>" + questions[i] + "</td>");
    document.writeln("<td>" + res[i] + "</td>");
    document.writeln("</tr>");
}

document.writeln("<tr>");
document.writeln("<th>Итого</th>");
document.writeln("<th>" + sum + "</th>");
document.writeln("</tr>");


document.writeln("</table>")

// -------закончили тестик -------------------------------------------- */


// let text1 = document.getElementById("text_1")
// console.log(text1);
// console.log(text1.textContent);

// text1.textContent = "Новое содержимое";

// let text2 = document.getElementById("text_2")
// text2.innerHTML = "Новое содержимое <b>с html разметкой</b>"


/* let res = +prompt("Выберите изображение", "1-собака, 2-кот, 3-птица, 4-рыба ");
document.writeln("<div id='image'></div>");
let img =document.getElementById("image")

switch(res){
    case 1:
        img.innerHTML = "<img src ='img/dog.jpg'>";
        break;
    case 2:
        img.innerHTML = "<img src ='img/cat.jpg'>";
        break;
    case 3:
        img.innerHTML = "<img src ='img/bird.jpeg'>";
        break;
    case 4:
        img.innerHTML = "<img src ='img/fish.jpeg'>";
        break;
    default:
        alert("Такого изображения нет")
} */


// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello tag";
// tag.style.background = "silver";
// tag.style.padding = "10px 20px";
// tag.style.color = "blue";
// tag.style.fontWeight = "bold";

// // list-style-type => ListStyleType // всё по аналогии

// tag.id = "test";
// tag.className = "x";


// let q = document.getElementsByClassName('a');
// console.log(q);
// q[1].style.color = "red";
// q[0].style.color = "blue";


// document.querySelector(css);
// document.querySelectorAll(css);


// let select_class = document.querySelector(".a");
// let select_class = document.querySelectorAll(".a");
// console.log(select_class);

// let select_tag = document.querySelector("p");
// let select_tag = document.querySelectorAll("p")[1];
// console.log(select_tag);

// let select_id = document.querySelector("#tsxt_1");
// let select_id = document.querySelectorAll("#text_1")[0];
// console.log(select_id);

// select_id.style.color = "red";


// let el = document.querySelector("h2");
// el.style.color = "red";

// let el1 = document.querySelectorAll("h2");
// el1[1].style.color = "purple";

// let lists = document.querySelectorAll("li");
// console.log(lists.length);

// for(let i=0; i<lists.length; i++){
//     lists[i].innerHTML += " - фрукты";
// }

// let purples = document.querySelectorAll(".purple li");
// for(let i=0; i<purples.length; i++){
//     purples[i].innerHTML += "!!!";
// }

// // let m = document.querySelectorAll(".red li")[1];
// let m = document.getElementsByClassName("red")[0].getElementsByTagName("li")[1]

// m.style.color = "orange";

/* document.writeln("<div id='divSample'></div>");
let div = document.querySelector('#divSample');
div.innerHTML = `Дюбель — конструктивный элемент, который используется для укрепления винта или предмета на стене, на потолке или на полу в помещении или под открытым небом в различных материалах (бетон, кирпич и прочее). Сам дюбель удерживается в конструкции при помощи сил трения. С некоторого времени элементы связи и укрепления, дюбели и винт (шуруп) объединяют в одно целое и используются, прежде всего, для тяжёлых нагрузок. Дюбели предлагаются в различных величинах, которые руководствуются диаметром дюбеля (и соответственно необходимым отверстием), измеренным в миллиметрах..`;

div.style.background="#f0f";
div.style.color="#99ffff";
div.style.width="50%";
div.style.outline="10px dotted #000";

div.className = "resetFont";

let res = document.querySelector(".resetFont");
res.style.fontSize="12pt";
res.style.fontWeight = "bold";
res.style.textDecoration = "line-through"; */

// -----------------------------
// let js = ["нужно", "учить", "JavaScript"];
// console.log(js);

// console.log(js.pop());
// console.log(js);

// js.push("JavaScript", "!");
// console.log(js);

// console.log(js.shift());
// console.log(js);


// js.unshift("Почему", "нужно");
// console.log(js);
// -----------------------------

// let arr = js.slice(1,3);
// console.log(arr);
// console.log(js.slice(1));

// -----------------------------
// js.splice(0,1);
// console.log(js);

// js.splice(0, 2, "Мы", "изучаем", "!!!");
// console.log(js);

// js.splice(2, 0, "сложный", "язык");
// console.log(js);

// js.splice(-2, 0, "но", "очень", "интересный");
// console.log(js);
// ---------------------------------------------------------------------

// Lesson 6 _JavaScript_ (order DZ_51)

// let str = js.join(" & ");
// console.log(str);


// let st = ["Фамилия", "Имя", "Отчество"]
// let fio = new Array(3);

// for(let i = 0; i < fio.length; i++){
//     fio[i] = prompt("Введите данные:", st[i]);
// }

// alert(fio.join(" "));


// js.reverse();
// console.log(js);

// -----------------------------
// js.sort();
// console.log(js);

// let m = [1, 5, 15, 2];
// m.sort((a, b) => a - b);  // Указали функцию, как принцип сортировки
// console.log(m);  // [1, 2, 5, 15] без указанной функции: [1, 15, 2, 5]
// -----------------------------


// Fanction Declaration

// function caption(a, b, c){
//     // alert(a + b + c);
//     let res = a + b + c;
//     return res
//     console.log(res);
// }

// let test = caption(10, 20, 30);
// console.log(test);



// ------------------------------------------
// function showArrayContent(arrayToShow) {
// // Тут идёт код функции.
//     if(arrayToShow.length == 1){
//         return arrayToShow;
//     } else {
//         let last = arrayToShow.pop();
//         let str = arrayToShow.join(', ');
//         let res = str + " и " + last;
//         return res;
//     }
// }
// // Определяем массивы.
// let a = new Array('Текст');
// let b = new Array('день', 'ночь');
// let c = new Array('зима', 'весна', 'лета', 'осень');

// alert(showArrayContent(a)); // Выводим содержимое массивов,
// alert(showArrayContent(b)); // используя созданную выше функцию.
// alert(showArrayContent(c));
// ------------------------------------------


// ------------------------------------------
// Fanction Expression

/* let sum1 = function (a, b) {
    return a + b;
}

alert(sum1(2, 3));


alert(sum2(20, 30));  // Обращаемся раньше, чем функция была создана

function sum2(a, b) {  // достаточно факта наличия этого объявления
    return a + b;
} */


// ------------------------------------------


// ------------------------------------------
// Immediately Invoked Function Express (IIFE) -
// - самовызывающаяся функция (анонимная функция)

// (function () {
//     alert("Привет мир");  // Подобие лямбда-функции в Python
// })();  // Обязательно ставится

// (function (n) {
//     alert(n * n);
// })(4)

// let a = 4;
// alert(a);
// ------------------------------------------


// function caption(a, b, c){
//     // alert(a + b + c);
//     let res = a + b + c;
//     return res;
// }
// ------------------------------------------
// Arrow Function

// let test = (a, b, c) =>  {
//     let res = a + b + c;
//     return res;
// }

// alert(test(10, 20, 30));
// ------------------------------------------
// hello("Igor");  // Так не получится...
/* let hello = n => alert("Hello, " + n);
hello("Igor");  // А только так */
// ------------------------------------------


// document.writeln(Math.floor(7.9) + "<br >")
// document.writeln(Math.ceil(7.1) + "<br >")
// document.writeln(Math.round(7.5) + "<br >")

// ----------------------------------------------------------------
// Вопрос?
// (function(){
//     document.writeln(Math.random() + "<br>");
// }(2, 9));  // 0.9604671599214994
// --------
/* (function(min, max){
    document.writeln(Math.floor(Math.random() * (max - min) + min)
    + "<br>");
}(7, 14));


document.writeln(Math.floor(Math.random() * 9)+ "<br>");  // от 0 до 9
document.writeln(Math.floor(Math.random() * 7 + 2)+ "<br>");  // от 2 до 9

// от 7 до 14
document.writeln(Math.floor(Math.random() * 7 + 7)+ "<br>");
// от 7 до 15
document.writeln(Math.floor(Math.random() * 8 + 7)+ "<br>"); */
// --------
/* let randMas = ["Цикл", "Массив", "Условие", "Функция"];
document.writeln(pickRandom(randMas));

function pickRandom(mas){
    return mas[Math.floor(Math.random()*mas.length)];
} */

// -----------------------------------------------
// let j = 2;

// if (true) {
//     let j = 1;
//     // console.log(j);
// }

// console.log(j);

// function ch() {
//     j = 1;
//     // console.log(j);
// }

// ch()
// console.log(j);
// -----------------------------------------------

/* document.writeln("<div id='block'></div>");
let id = document.getElementById("block");

id.style.width = "100px";
id.style.height = "100px";
// id.style.background = "rgb(255, 0, 0)";

let createColor = () => {
    let r = parseInt(Math.random() * 256);  // Math.floor
    let g = parseInt(Math.random() * 256);
    let b = parseInt(Math.random() * 256);
    // id.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
    id.style.background = `rgb(${r}, ${g}, ${b})`;
}

createColor(); */
// -----------------------------------------------

// function test(a, b) {
//     alert("a="+a+", b="+b);
// }

// test(1);
// test(1, 2);
// test(1, 2, 3);

// function test(a, b) {
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     console.log(arguments[3]);
// }

// test(1, 2, 3);
// **********************************************
/* function sum() {
    let res = 0;
    for(let i=0; i<arguments.length; i++){
        res += arguments[i];
    }
    let a = "Hello";
    return [res, a];
}

document.writeln("Так поредаётся 2 и > элемента, как массив:" + "</br>");
document.writeln(sum() + "</br>");
document.writeln(sum(1) + "</br>");
document.writeln(sum(1, 2) + "</br>");
document.writeln(sum(1, 2, 3) + "</br>");
document.writeln(sum(1, 2, 3, 4) + "</br>");
document.writeln(sum(1, 2, 3, 4, 5) + "</br>"); */
// **********************************************

/* function hello(name = "незнакомец") {
    // name = name || "незнакомец";
    document.writeln("Привет, " + name + "! <br>");
}

hello("Иван");
hello(); */

// ------------------------------------------------------
/* function square(width, height=200, fon="green"){
    document.writeln("<div id='shape'></div>");
    let div = document.querySelector("#shape");

    div.style.background = fon;
    div.style.width = width + "px";
    div.style.height = height + "px";
}

square(350, 450, "gold");
square(150, 100);
square(150, 150, "red");
square();
// square(height=200);  // Не работает */
// ------------------------------------------------------


// -вопрос?-------------------------------------
/* function hello(){
    alert("Привет");
}

alert(hello);  // ()
// hello(); */
// ------------------------------------------------------

/* let str = "I\'m a JavaScript \"programmer\"";

document.writeln(str + "<br>");
document.writeln(str.length + "<br>");
document.writeln(str[2] + "<br>");

// str[2] = "y";

str = str[2] + "y";
document.writeln(str + "<br>"); */
// ------------------------------------------------------

/* let s = "абббабввбабвбвббабвббабв";
counterLetters(s);


function counterLetters(str){
    let letters = ["а", 'б', 'в'];
    for(let i=0; i<letters.length; i++){
        let count = 0;
        for(let j=0; j<str.length; j++){
            if(str[j] == letters[i]){
                count++
            }            
        }
        document.writeln("Символ '" + letters[i] +"' встретился " + count + " раз<br>");
    }
} */
// ------------------------------------------------------

// let str = "I\'m a JavaScript \"programmer\"";

// document.writeln(str[6] + "<br>");
// document.writeln(str.charAt(6) + "<br>");

// document.writeln(str.toLowerCase() + "<br>");
// document.writeln(str.toUpperCase() + "<br>");
// document.writeln(str + "<br>");


/* let n = prompt("Введите имя", "никита");
alert(first(n))

function first(str){
    let firstLetter = str.charAt(0).toUpperCase();
    for(let i=1; i< str.length; i++){
        firstLetter += str[i].toLowerCase();
    }
    return firstLetter;
} */

// -------------
// let str = "I'm a JavaScript \"programmer\"";
// let str1 = "Я учу JavaScript. Мне нравится JavaScript.";
// str = str.concat(str1);
// document.writeln(str + "<br>");

// document.writeln(str.indexOf("JavaScript", 7) + "<br>");
// document.writeln(str.lastIndexOf("JavaScript") + "<br>");

/* let email;

do{
    email = prompt("Введите Email:");
    if(email.indexOf("@")==-1){
        alert("Некорректно. Повторите операцию");
        continue;
    }
    break;
}while(true);

alert("Спасибо за сотрудничество"); */

// document.writeln(str.split(".") + "<br>");
// console.log(str.split(".", 2));

// document.writeln(str.slice(0,3) + "<br>");
// document.writeln(str.slice(-23, -10) + "<br>");
// document.writeln(str.substring(0, 3) + "<br>");
// document.writeln(str.substring(3, 0) + "<br>");
// document.writeln(str.substring(-10) + "<br>");

/* let style = prompt("Введите свойстов CSS", "background-color");
alert(replace(style));

function replace(str){
    let mas = str.split("-");  // ["background", "color"]
    for(let i = 1; i < mas.length; i++){
        mas[i] = mas[i].charAt(0).toUpperCase() + mas[i].slice(1);
    }
    return mas.join('');
} */

/* function loadStr(){
    alert("Страница была загружена")
} */
// ----------------------------------------------
/* let m = document.getElementById("mes");

function over() {
    m.style.color = "red";
}
function out() {
    m.style.color = "yellow";
}

function change() {
    let id = document.getElementById("title");
    id.style.color = "blue";
}

function randomBg() {
    // document.body.style.background="rgb("+rand()+","+rand()+","+rand()+")";
    document.body.style.background = `rgb(${rand()}, ${rand()}, ${rand()})`;
}

function rand() {
    return Math.floor(Math.random() * 256);
}

let image = document.getElementById("image");

function on() {
    image.src = "night.png"
}

function off() {
    image.src = "day.png"
} */
// ----------------------------------------------
//--------
// let but1 = document.getElementById("but");  // не

/* // Вариант записи 1:
but.onclick = hello;

function hello(){
    alert("Спасибо");
}

// Вариант записи 2:
but.onclick = function(){
    alert("Спасибо");
} */
//--------
// -------------
// but.onclick = hello;

// function hello() {
//     alert("Спасибо");
// }

/* function change(id){ // Ссылается на объект <p onclick="change(this)">...html
    id.innerHTML = "новый текст";
} */

/* function setColor(elem){  // "elem" находит по ключевому слову "this" в html
    document.body.style.background = elem.className;  // и применяет класс
}  // напр. <a href="#" onclick="setColor(this)" class="red">Красный</a> в html*/

//--------
/* let el = document.querySelector("#but");  // тег <p> - 'не нажимать'

el.addEventListener("click", function(){  // .addEventListener - слушатель события
    el.innerHTML="Новый текст";
})

// Можно так написать:
// el.addEventListener("contextmenu", function(){
//     el.style.color = "green";
//     el.style.background = "yellow";
// })
// А можно написать иначе:
el.addEventListener("contextmenu", setColor);

function setColor(){
    el.style.color = "green";
    el.style.background = "yellow";
} */
//--------

/* // ch95hl - сокр. от строка 95 html
document.addEventListener("mousemove",
    function (event) { // ch95hl
        let c = document.querySelector("#elem");
        let x = event.clientX;
        let y = event.clientY
        c.textContent = "x = " + x + ", y = " + y;
        c.addEventListener("dblclick", function
        (event){
            event.target.style.background = "red";
        })
    }
) */
//--------
/* let el = document.querySelector("#but");  // тег <p> - 'не нажимать'
el.addEventListener("click", handler);

function handler(){
    alert("Спасибо");
    el.removeEventListener("click", handler);
} */
//--------

// setTimeout(функция, задержка);

/* // setTimeout("alert('Текст')", 3000);  // задержка в 3 секунды

// setTimeout(hello, 1000, "Привет", "друг");  // hello, 3000 - 2 обязательных, но могут быть дополнительные параметры ("Привет", "друг", "как ты").

setTimeout('hello("Привет", "друг")', 5000);  // hello() обязательно в кавычках, если такая форма записи.

function hello(h, n){
    alert(h + ", "+ n + '! ');
} */
//--------

/* document.writeln("<div id='dt'>Создание анимированного текста</div>");

let id = document.querySelector('#dt');  // <div id="dt">Создание анимированного текста</div>
let text = document.querySelector('#dt').innerHTML;
console.log(text);

let i = 0;

window.addEventListener('load', animText);

function animText() {
    id.innerHTML = text.substring(0, i);
    i++;  // i = i + 1;
    if (i > text.length) {
        i = 0;
    }
    setTimeout(animText, 100);
} */
// ------


/* let d = new Date();
document.writeln(d + "<br>");
document.writeln(d.toDateString() + "<br>");
document.writeln(d.getFullYear() + "<br>");
document.writeln(d.getMonth() + "<br>");  // 6, от 0 по 11
document.writeln(d.getDate() + "<br>");  // 23
document.writeln(d.getDay() + "<br>");  // 3, от 0 - воскресенье, 6-суббота

// -------------------
let mounth = ['анваря', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

let day = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

// Сегодня: 23 июля 2025 год, Среда
// let d = new Date();
let fullDate = "Сегодня: " + d.getDate() + " " + mounth[d.getMonth()] + " " + d.getFullYear() + " год, " + day[d.getDay()];

document.writeln(fullDate); */

// ***************************************************************************
// Lesson 8

// setInterval(функцимя, интервал)

// ---------------------
/* document.writeln("<input type='button' value='sratr / stop'>");
document.querySelector('input').addEventListener("click", startStop);

let act, run;
console.log(run)

function startStop(){
    if(!run){
        act = setInterval(setColor, 1000);
        // run = true;
    }else{
        clearInterval(act);
        // run = false;
    }
    // console.log(act);
    run = !run;
}

function setColor(){
    let x = document.body;
    x.style.background = x.style.background == "yellow" ? "orange": "yellow";
} */
// ---------------------

/* document.writeln("<div id='text'>Здесь будет отображаться текущее время</div>");
// window.addEventListener('load', setInterval(time, 1000));
// window.addEventListener('load', function(){
//     setInterval(time, 1000)
// });
window.addEventListener('load', () => setInterval(time, 1000));

function time(){
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    if(min<10){
        min = "0" + min;
    }
    if(sec<10){
        sec = "0" + sec;
    }

    let times = hour + ":" + min +  ":" + sec;
    // console.log(times);
    document.querySelector("#text").innerHTML = times;
} */
// ---------------------


/* document.writeln("<div id='text'>Здесь будет отображаться текущее время</div>");
window.addEventListener('load', () => setInterval(time, 1000));

function time(){
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    if(min<10){
        min = "0" + min;
    }
    if(sec<10){
        sec = "0" + sec;
    }

    let times = hour + ":" + min +  ":" + sec;
    // console.log(times);
    document.querySelector("#text").innerHTML = times;
} */


// ---------------------
/* let imgTime = ['c0.gif','c1.gif','c2.gif','c3.gif','c4.gif','c5.gif','c6.gif','c7.gif','c8.gif','c9.gif'];

let t = document.querySelectorAll("#clock img");
console.log(t);
clock();

function clock(){
    let time = new Date();
    let hours = time.getHours();
    let mins = time.getMinutes();
    let seconds = time.getSeconds();

    // console.log(hours, mins, seconds);
    getImg(hours, mins, seconds);
    setTimeout(clock, 1000);
}

function getImg(h, m, s){  // 19 / 10 = 1.9 => округляем => 1
    t[0].src = imgTime[parseInt(h / 10)];
    t[1].src = imgTime[h % 10];

    t[3].src = imgTime[Math.floor(m / 10)];
    t[4].src = imgTime[m % 10];

    t[6].src = imgTime[Math.floor(s / 10)];
    t[7].src = imgTime[s % 10];
} */

// ---------------------
/* document.writeln(`
    <input type='text' size='4' id='timer' value='0.0'>
    <input type='button' value='Start/Stop'>
    <input type='button' value='Clear'>
`)

document.querySelector("input[value='Start/Stop']").addEventListener('click', startTimer);

document.querySelector("input[value='Clear']").addEventListener('click', resetTimer);

let id, flag;
function startTimer() {
    if (!flag) {
        id = setInterval(incTimer, 100);
    } else {
        clearInterval(id);
    }
    flag = !flag;
}

let tsec = 0;
    function incTimer() {
        tsec++;
        let t = tsec/10.0;
        if(tsec%10==0){
            t+=".0";
        }
        document.getElementById("timer").value = t;
    }

function resetTimer(){
    document.getElementById("timer").value = "0.0";
    tsec = 0;
} */

// ---------------------

/* let a = document.querySelector("#cl");
a.addEventListener("click", myMove);

function myMove() {
    let elem = document.getElementById("animate");
    let pos = 0;
    let id = setInterval(frame, 5);

    function frame() {
        // a.style.display='none';
        // a.style.visibility='hidden';
        if (pos == 350) {
            // a.style.display='block';
            // a.style.visibility='visible';
            a.addEventListener("click", myMove);
            clearInterval(id);
        } else {
            a.removeEventListener("click", myMove);
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
} */

// ---------------------

// window.document.image.border = 1;  // подобная запись
// document.image.border = 1;  // "1"
// document.writeln("<br>Ширина изображения: " + document.image.width + "<br>");
// document.writeln("<br>Высота изображения: " + document.image.height + "<br>");

// document.image.width = 200;
// document.image.src = "blue_star.png";

// Задание "Перелистывание картинок":-------------------------
/* let array = new Array('2.jpg', '3.jpg', '4.jpg');
document.writeln("<input type='botton' value='<' name='left'>");

document.writeln("<img src='" + array[0] + "'>");

document.writeln("<input type='botton' value='>' name='right'>");

document.getElementsByName('right')[0].addEventListener('click', arrowRight);
document.getElementsByName('left')[0].addEventListener('click', arrowLeft);

let image = document.querySelector("img");
let i = 0;

function arrowRight() {
    i++;
    if (i == array.length) {
        i = 0;
    }
    image.src = array[i];
}

function arrowLeft() {
    i--;
    if (i < 0) {
        i = array.length - 1;
    }
    image.src = array[i];
} */
// Задание "Перелистывание картинок" окончание.-------------------------

// Информация для dz_53_js_8-------------------------------------------
// нач. к Д/з:

// let a = 5;
// let b = 10;
// let c;

// console.log("a =", a);
// console.log("b =", b);

// c = a;
// a = b;
// b = c;

// console.log("a =", a);
// console.log("b =", b);


/* document.writeln("<br>" + "<input type='number' min='1' max='3' value='3'>");
document.writeln("<input type='button' id='btn' value='Кнопка'>");

let btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener("click", function () {
    let el = document.querySelector("input").value;
    console.log(el);
}) */

// let el = document.querySelector("input");
// console.log(el);
// окончание информации для dz_53_js_8----------------------------

// Занятие 9 ------------------------------------

// alert(document.documentElement.innerHTML);
// alert(document.head);
// alert(document.body.innerHTML);

// let myTitle = document.querySelector("h1").innerHTML;
// console.log(myTitle);

// // let par = document.querySelector("p").firstChild.nodeValue;
// // let par = document.querySelector("p").childNodes[0].nodeValue;
// // let par = document.querySelector("p").nodeName;
// // let par = document.querySelector(".dom").nodeType;
// let par = document.querySelector(".dom").firstChild.nodeType;
// console.log(par);
//------------------------------

/* let elem = document.querySelector("#root");

let tag = document.createElement("p");  // <p></p> - создан тег "p"
let node = document.createTextNode("Новый текст!!!");  // Новый текст!!!
tag.append(node);  // <p>Новый текст!!!</p> - 

elem.append(tag);  // добавляет новый элемент дочерним последним элементом внутри родительского
elem.prepend(tag);  // добавляет новый элемент первым дочерним элементом внутри родительского
elem.before(tag);  // добавляет новый элемент до выбранного id
elem.after(tag);  // добавляет новый элемент после выбранного id

elem.replaceWith(tag);  // заменяет новым элементом выбранный id */
//------------------------------
/* let list = document.querySelector("ul");

let newItem = document.createElement("li");
newItem.innerHTML = "Новый <i>элемент списка</i>";

list.append(newItem); */
//------------------------------
/* document.querySelector("#move").addEventListener("click", change);
document.querySelector("#add").addEventListener("click", add);
let i = 1;

function add(){
    let elem = document.createElement("li");
    elem.innerHTML = "Water" + i;
    document.querySelector("#list2").append(elem);  // либо так
    // list2.append(elem);  // либо так
    i++;
}

function change(){
    let elem = document.querySelector("#list2").lastChild;
    document.querySelector("#list1").append(elem);

} */
//------------------------------
/* let div = document.querySelector("#root");
div.insertAdjacentHTML("beforebegin", "<p>До выбранного элемента</p>");
div.insertAdjacentHTML("afterend", "<p>После выбранного элемента</p>");
div.insertAdjacentHTML("afterbegin", "<p>Первый внутри выбранного элемента</p>");
div.insertAdjacentHTML("beforeend", "<p>Последний внутри выбранного элемента</p>");

let first = document.querySelector("#p1");
// first.remove();
let second = document.querySelector("#p2");
second.after(first); */
//------------------------------

/* let ul = document.querySelector("ul");
let clone = ul.cloneNode(true);

clone.querySelector("li").innerHTML = "Начало клюнируемых элементов";
ul.after(clone);
 */
//------------------------------
/* let list = document.querySelector(".list");
list.insertAdjacentHTML("beforebegin", "<h2>Список </h2><hr>");

let list_inner = document.querySelector("h2");
list_inner.insertAdjacentText("beforeend", "планет");
list.insertAdjacentHTML("afterend", "<hr>");
let hr = document.querySelectorAll("hr")[1];
let h4 = document.createElement("h4");
h4.innerHTML = "Конец списка";
hr.insertAdjacentElement("afterend", h4);

let idRemove = setInterval(function(){
    let li = document.querySelector(".list > li:last-child");
    if (li === null){
        clearInterval(idRemove);
        // alert("Список удалён");
        list.insertAdjacentHTML("beforebegin", "<li>Список удалён</li>");
    }else{
        li.remove();
    }
    
}, 500); */
//------------------------------
/* let div = document.querySelector("div");
div.className = "alert";
let activeDiv = document.querySelector(".active");
// activeDiv.className = "hidden";
activeDiv.classList.add("hidden");
// activeDiv.classList.remove("hidden");
activeDiv.classList.toggle("hidden");
activeDiv.classList.replace("active", "alert"); */
//------------------------------

/* let frogImg = document.querySelector("#greenFrog");

console.log(frogImg.id);
console.log(frogImg.className);
console.log(frogImg.alt);
console.log(frogImg.title);
console.log(frogImg.src);
// console.log(frogImg.data-frog);  // не получится

frogImg.title = "Новый текст подсказки";
console.log(frogImg.getAttribute('src'));
console.log(frogImg.getAttribute('data-frog'));  // получится

frogImg.setAttribute("src", "4.jpg");
// frogImg.removeAttribute("src");

console.log(frogImg.hasAttribute("src")); */

// Lesson (Занятие) 10 (25.08.2025)-- (order DZ_55)----------------------------------

//for DZ
/* let spans = document.querySelectorAll(".remove-button");

// for (let i=0; i < spans.length; i++){
//     spans[i].addEventListener("click", function(){
//         // spans[i].remove();
//         this.parentNode.remove();
//     });
// }


for (let i=0; i < spans.length; i++){
    spans[i].addEventListener("click", () => //Не использовать со стрелочной функцией
        // spans[i].remove();
        this.parentNode.remove()
    );
} */

//***************************** */
/* document.form1.style.background = "silver";  // name='form1'
document.forms[0].style.padding = "16px";
document.forms['form1'].style.margin = "20px";
document.forms.form1.style.border = "2px dotted grey";

document.form1.name1.style.color = "blue";
document.form1["name1"].style.background = "agua";  // если присутствует дефис в "name"

let but = document.querySelector("button");
let txt = document.querySelector("#text1")

but.addEventListener("click", content);

function content(){
    // alert(txt.value);
    console.log(txt.value);
} */
//***************************** */

// let input = document.querySelectorAll("input");
// let form1 = document.forms.form1;

// console.log(input.length);
// console.log(form1.length);

// for (let i = 0; i < form1.length; i++) {
//     input[i].addEventListener("click", checkAll);
// }

// let num;
// function checkAll() {
//     num = 0;
//     for (let i = 0; i < form1.length; i++) {
//         if (input[i].checked && input[i].type == 'checkbox') {
//             num++
//         }
//     }
//     if (num == 3) {
//         for (let i = 0; i < form1.length; i++) {
//             if (!input[i].checked && input[i].type == 'checkbox') {
//                 input[i].disabled = true;
//             }
//         }
//     } else {
//         for (let i = 0; i < form1.length; i++) {
//             input[i].disabled = false;
//         }
//     }
//     console.log(num);
// }

// ***********************

/* let input = document.querySelectorAll("input[type='checkbox']");
let form1 = document.forms.form1;

console.log(input.length);
console.log(form1.length);

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("click", checkAll);
}

let num;
function checkAll() {
    num = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked && input[i].type == 'checkbox') {
            num++
        }
    }
    if (num == 3) {
        for (let i = 0; i < input.length; i++) {
            if (!input[i].checked && input[i].type == 'checkbox') {
                input[i].disabled = true;
            }
        }
    } else {
        for (let i = 0; i < input.length; i++) {
            input[i].disabled = false;
        }
    }
    console.log(num);
} */



// --------------------------------------

// let arrayCol = new Array('aqua', 'red', 'yellow', 'grey', 'green');  // Исходный массив картинок
// for (let i = 0; i < arrayCol.length; i++){
//     document.writeln(`<label for='${arrayCol[i]}'>${arrayCol[i]}</label><br>`);
// }
/* let choose = document.querySelector("input[type='button']");

choose.addEventListener("click", chooseColor);

function chooseColor() {
    let f = document.form3.radio2;

    console.log(f.length)

    // for(let i=0; i < f.length; i++){
    //     if(f[i].checked){
    //         document.body.style.background = f[i].value;
    //     }
    // }
    document.body.style.background = f.value;
} */

// ----------DZ-----------------------
// chwckbox загадки
// ----------DZ-----------------------
// ---------------------------------------------------
// Свойства select:

/*
select.option - коллекция из подэлементов <option> (массив)
select.value - значение выбранного в данный момент <option>
select.selectedIndex - номер выбранного <option> (индекс)
 */

/* let city = document.querySelector("#city");

city.addEventListener("change", setImage);

function setImage() {
    let cities = city.selectedIndex;  // Индекс
    console.log(cities);
    let options = city.options;  // массив
    console.log(options);
    let code = options[cities].value;
    console.log(code);

    let div = document.querySelector("#image");
    div.innerHTML = "<img src='img/" + code + ".png'>";
    console.log(div);
} */

// ---------------------------------------------------

/* let gas = document.querySelectorAll(".petrol");

for (let i = 0; i < gas.length; i++) {
    gas[i].addEventListener("click", function () {
        let gallons = document.querySelector(".gallons").value;
        let amount = gas[i].getAttribute("data-price");  // получить пользовательский атрибут
        let res = gallons * amount;
        let sum = document.querySelector(".sum");
        sum.innerHTML = res.toFixed(2);  // Math.round(res)  res.toFixed(2)
        // console.log(res);
    });
}

console.log(5+3); */

// ---------------------------------------------------

/* let reg = document.querySelector(".register");

reg.addEventListener("submit", function () {
    // alert("Заработал");
    let login = reg.login.value;
    let psd1 = reg.password1.value;
    let psd2 = reg.password2.value;

    if (!(login && psd1 && psd2)) {  // логин/пароль/подтверждение
        alert("Все поля должны быть заполнены");
    }
    if (psd1 != psd2) {
        alert("Пароли не совпадают");
    }
    if (psd1.length < 6) {
        alert("Слишком короткий пароль");
    }
}); */

// ---------------------------------------------------

// Lesson 11 _JavaScript_ (order DZ_56)

/*
search() -  возвращает позицию, на которойрегулярное выражение совпадает с вызывающей строкой. Возвращает -1, если совпадение не найдено

match() - получить все совпадения с регулярными выражениями

replace() - поиск и замена

split() - делит строку на массив, разбивая её по указанной подстроке

test() - выполняет поиск совпадений регулярного выражения со строкой.
Возвращает true или false
*/

// let regexp = new RegExp("...");
// let regexp1 = /шаблон/;
// let regexp2 = /шаблон/gmi;

// let str = "Я ищу совпадения в 2025 году. ищу Hello Ёжик 1234 56789_";
// // let exp = /ищу/g;
// document.writeln(str + "<br>");
// document.writeln(str.search(exp) + "<br>");
// document.writeln(str.match(exp) + "<br>");
// document.writeln(exp.test(str) + "<br>");

// [...] - искать любой из заданных символов, но только один раз(один символ)
// let exp = /[0256]/g;
// document.writeln(str.match(exp) + "<br>");

/* Флаги
g (global) - глобальный поиск
i (ignoreCase) - регистронезависимый поиск
m (multiline) - многострочный поиск
*/

/* Диапазоны
[0-9] - одна любая цифра ([3-7]), какой укажем
[A-Z] - заглавные буквы
[a-z] - строчные буквы
[A-Za-z] - полный диапазон в любом регистре - English
[А-Я] - заглавные буквы
[а-я] - строчные буквы
[А-яЁё] - полный диапазон в любом регистре - русские
*/

// let exp = /[0-9]/gi;  // Одна любая цифра в диапазоне от 0 до 9 (зесь)
// document.writeln(str.match(exp) + "<br>");

// [^abc] - исключающий диапазон, ни один из указанных символов (уточнить?)
// let exp = /[^0-9]/g;  // Одна любая цифра в диапазоне от 0 до 9 (зесь)
// document.writeln(str.match(exp) + "<br>");

/*
{3} - количество символов, идущих подряд
{1,} - от 1 до любого кол-ва повторений
{2,5} - от 2 до 5 повторений
*/

// let exp = /[0-9]{2,3}/g;  // {2,3}? - знак "?" означает приоритет малой цифры
// document.writeln("<br>" + str.match(exp) + "<br>");


/* let html = `
    <table>
        <tr>
            <td bgcolor="#CCC">
                <img src="222.png"
            </td>
            <td bgcolor="#003399">
                <img src="1f3.png"
            </td>
            <td bgcolor="#00ccdd">
                <img src="FFF.png"
            </td>
        </tr>
    </table>
`;
// #{1,2} => <td bgcolor="##003399">
let reg = /#{1,2}([0-9a-f]{3}){1,2}/gi;
document.writeln(html.match(reg) + "<br>"); */

/*
\d (digit) - любая цифра
\s (space) - пробельный символ, включая табуляцию и перевод строки
\w (word) - любая цифра, буква (только английский алфавит, регистронезависимый) или символ подчёркивания
*/

// let exp = /\s\w+/g;  // .\s\d
// document.writeln(str.match(exp) + "<br>");

/*
\D - всё кроме цифр
\S - не пробельный символ, включая табуляцию и перевод строки
\W - все кроме цифр, букв или символов подчёркивания
*/

// let exp = /\D/g;  //  \.\s.
// document.writeln(str.match(exp) + "<br>");

/*
^ - начало строки (перед последовательностью ничего не должно быть)
$ - конец строки (после последовательности ничего не должно быть)
*/

// str = "909";  // "909fgdfg"  'fgdfg'
// let exp = /^\d{3}$/g;
// document.writeln(str.match(exp) + "<br>");

// точка - один любой символ

// let exp = /\d.\d/g;
// document.writeln(str.match(exp) + "<br>");

/*
+ - от 1 до любого количества повторений {1,}
* - от 0 до любого количества повторений {0,}
? - от 0 до 1 повторения {0,1}
*/

// let exp = /\d+/g;  // let exp = /\d*/g;
// document.writeln("<br>" + str.match(exp) + "<br>");
// document.writeln(str.length + "<br>");
// ,,,,,,,,,,,,,,,,,,,2025,,,,,,,,,,,,,,,,,,,,,,,1234,,56789,,

/* let html = `
    <p>Text
        <img src="222.jpg">
        <img src="dfsdf222.jpg">
        <span>else. New Text</span>
        <img src="RRR.jpeg">
        <img src="uio.gif">
    </p>
`;

let exp = /(\w+)\.(gif|jpg|jpeg|png|bmp)/g;
document.writeln(html.match(exp) + "<br>"); */

// document.writeln("aaa".replace('a', 'b') + "<br>"); // без шаблона рег. выр.
// document.writeln("aaa".replace(/a/g, 'b') + "<br>"); // с шаблоном рег. выр.
//Так. обр-м с шаблоном регуляр. выражения с 'g' - поиск/замена по всей стр.
// ----------------
/* let text = "I kill you block dog";
document.writeln(text + "<br>");

let exp = /(book|kill|block)/ig;
text = text.replace(exp, "***");
document.writeln("<p>" + text + "</p>"); */
// ----------------

/* let text = "John Smith";
// let exp = /(John) Smith/;
// document.writeln(text.match(exp) + "<br>");

let exp = /(\w+)\s(\w+)/;
document.writeln(text.replace(exp, "$2 && $1") + "<br>"); */
// ----------------

/* let text = "red color: #F00 and green: #090"
document.writeln(text + "<br>");
let exp = /(#[a-f0-9]{3})/ig;
text = text.replace(exp, "<span style='color:$1'>$1</span>")
document.writeln("<p>" + text + "</p>"); */
// ----------------
/* let text = "I like yandex.ru";
document.writeln(text + "<br>");
let exp = /(([a-z0-9-]{2,}\.)+[a-z]{2,4})/i;
text = text.replace(exp, "<a href='https://$1'>$1</a>")
document.writeln("<p>" + text + "</p>"); */
// ----------------

// Lesson 12 _JavaScript_ (order DZ_57)

// for DZ_56 (js_11)----------------
/* let but = document.querySelector("input[type='button']");
but.addEventListener("click", smsUser);

function smsUser(){
    let sms = document.querySelector("textarea").value;
    let name = document.querySelector("input[type='text']").value;
    let regExpBBMail = /([0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3})/ig;
    sms = sms.replace(regExpBBMail, "<span style='color: red'>$1</span>");
    // document.writeln(`
    //     <fieldset>
    //         <legend>${name}</legend>
    //         <div>${sms}</div>
    //     </fieldset>
    // `);
    let form = document.querySelector("form");
    form.insertAdjacentHTML("beforeend", `<fieldset>
        <legend>${name}</legend>
        <div>${sms}</div>
        </fieldset>`)
} */
// ----------------

// let str = "   текст   ";  // начало, конец(пробелы)
// // str = str.replace(/^\s+|\s+$/g, "");
// str = str.replace(/\s+/g, "");
// alert(">" + str + "<");


/* let str = " +7 999 123 45 78   ";  // везде
str = str.replace(/\s+/g, "");
// str = str.replace(/^\s+|\s+$/g, "");
alert(">" + str + "<"); */

/* let str = " +7 (999) 123-45-78   ";  // везде лишние символы удалили
str = str.replace(/[\s()-]+/g, "");
alert(">" + str + "<"); */

// // let str = " +7 999 123 45 78   ";
// let str = "01-09-2025 01.09.2025";
// let re = str.split(/[-./\s]/);
// document.writeln(re + "<br>");  // Выводит массив через запятые
// console.log(re);
// ----------------

/* Типы данных 
- number
- string
- boolean
- null (object) 
- undefined

- Object
*/
// ----------------

// let car = new Object();  // Объектно-ориентированный подход
// let car1 = {};  // Литеральный подход

// let car = new Object();
// car["type-brand"] = "BMW";  // car[10] = "BMW"; в любом случае неявное преобр-е в строку
// car["color"] = "white";
// document.writeln(car["type-brand"] + " " + car["color"]);
// alert(car);

// let car = new Object();
// car.type = "BMW";
// car.color = "white";
// document.writeln(car.type + " " + car.color);
// console.log(car);
// console.log(car1);

//-----------
// let menu1 = {};  // Литеральный подход
// menu1.width = 300;
// menu1.height = 200;
// menu1.title = "Menu";
// document.writeln(menu1.title + ": " + menu1.width + " x " + menu1.height + "<br>");

// console.log(menu1);

/* let menu = {
    "width": 300,
    height: 200,
    title: "Menu",
};

// delete(menu.width);
delete menu.width;

// document.writeln(menu.title + ": " + menu.width + " x " + menu.height + "<br>");
let count = 0;
menu.age = 25;
for (let i in menu) {
    document.writeln(i + ": " + menu[i] + "<br>");
    count++;
}

console.log(menu);  // .menu.length - нет для объектов
console.log("count:", count);

// document.writeln("Имена ключей: " + Object.keys(menu));
// document.writeln("<br>Всего ключей: " + Object.keys(menu).length);


// Object.keys(menu).forEach(function(key){
//     document.writeln("<br>" + key + ": " + menu[key])
// });

Object.keys(menu).forEach((key) => document.writeln("<br>" + key + ": " + menu[key])); */

//---------------------------

// let car = {
//     name: "Volvo",
//     year: 2019,
// };

// console.log(car);

/* let obj = {
    name: "Гомер",
    colors: {
        first: "green",
        second: "blue"
    },
    color: [
        "black",
        "white",
        "red",
        "blue"
    ],
    hello: function () {
        document.writeln("Привет");
    }
} */

// let mas2 = obj.colors.map(function(elem){
// let mas2 = Object.keys(obj.colors).map(function(elem){
//     return elem + ": " + obj.colors[elem] + "<br>";
// });
// document.writeln("<br>" + mas2 + "<br>");
// console.log(mas2);

// let mas = obj.color.map(function(elem, index, all){
//     return "<br>" + elem + " " + index + " массив: " + all;
// });

// document.writeln("<br>" + mas + "<br>");

// let mas1 = obj.color.map(elem => elem.toUpperCase());
// document.writeln("<br>" + mas1 + "<br>");

// let fil = obj.color.filter(function(elem){
//     return elem.length < 5;
// });

// document.writeln("<br>" + fil + "<br>");

// document.writeln(obj.name + " " + obj.colors.first + " " + obj.color[1]);
// obj.hello();


// let calc = {
//     num1: 5,
//     num2: 10,
//     calculate: function(){
//         this.result = this.num1 * this.num2;
//         // calc.result = calc.num1 * calc.num2;
//     }
// }

// calc.calculate();  // метод, как-бы, как экземпляр объекта
// document.writeln(calc.result + "<br>");
// document.writeln(calc.num1);

// -----------------
/* let x = 15, y = 10;

// let coords = {
//     x: x,
//     y: y,
//     calcSq: function(){
//         document.writeln(this.x * this.y);
//     }
// }

let coords = {
    x, y,
    calcSq(){
        document.writeln(this.x * this.y);
    }
}

coords.calcSq(); */
// -----------------

// Функция конструктора

/* function Car(name, year) {
    this.name = name;
    this.year = year;
}

Car.prototype.getAge = function (){
    return new Date().getFullYear() - this.year;
}

Car.prototype.color = "black";

let ford = new Car("Ford", 2019);
console.log(ford);
console.log(ford.getAge());
ford.color = "red";
console.log(ford.color);


let bmw = new Car("BMW", 2017);
console.log(bmw);
console.log(bmw.getAge()); */
// -----------------

/* function User(pName, pAge){
    this.name = pName;
    this.age = pAge;

    this.displayInfo = function(){
        document.writeln("Имя: " + this.name + "; возраст: " + this.age + "<br>");
    }
}

let tom = new User("Tom", 26);
tom.displayInfo(); */

// ---------- Занятие lesson 13 --------

// Деструктуризация

/* let user = {
    login: {
        firstName: "Kate",
        lastName: "Pavlova"
    },
    password: "qwerty",
    role: "quest"
} */

// let {login: {firstName: f, lastName: l}, password, role} = user;
// document.writeln(f + " " + l + " " + password + " " + role);
// let {login: {firstName: f, lastName: l}, ...rest} = user;

// document.writeln(f + " " + l + " " + rest.password + " " + rest.role
//     + "<br>");
// rest.password = "123";
// document.writeln(f + " " + l + " " + rest.password + " " + rest.role
// + "<br>");

// document.writeln(f + " " + l + " " + user.password + " " + user.role
//     + "<br>");

// let {role, ...rest} = user;
// document.writeln(role);
// let {role} = user;
// document.writeln(role);

/* let number = [3, 5, 6];
let [a, b, c] = number;
document.writeln(a + " " + b + " " + c);
// let [, , c] = number;
// document.writeln(c); */

//-------------------
// let pers = {
//     name: "Игорь",
//     colors: [
//         "красный",
//         "белый",
//         "синий",
//         "чёрный"
//     ],
//     brand: "Bentley",
//     start(){
//         let {name, colors, brand} = this;
//         let color = Math.floor(Math.random() * 4);
//         document.writeln(name + " выиграл " + colors[color] + " " + " " + brand);
//     }
// }
// // До деструктуризации: (после выше - this)
//     /* start: function(){
//         let color = Math.floor(Math.random() * 4);
//         document.writeln(this.name + " выиграл " + this.colors[color] + " " + " " + this.brand);
//     } */

// pers.start();
//-------------------

// let form = document.form1;
// form.addEventListener("submit", event => {  // (event) - одно название без ()
//     event.preventDefault();  // Отменяет действие тега, который совершается
//     // по умолчанию
//     let title = form.title.value;
//     let text = form.text.value;
//     let description = form.description.value;

//     // alert("Работает");
//     // console.log(title, text);
//     // saveForm({title: title, text: text});
//     saveForm({title, text, description});

// });

// function saveForm(obj){
//     let formData = {
//         date: new Date().toLocaleDateString(),
//         ...obj
//     }
//     console.log("formData:", formData);
// }

// function saveForm({title, text, description}){
//     let formData = {
//         date: new Date().toLocaleDateString(),
//         title, text, description
//     }
//     console.log("formData:", formData);
// }

// function saveForm(obj){
//     let {title, text, description} = obj;
//     let formData = {
//         date: new Date().toLocaleDateString(),
//         title, text, description
//         // title: title,
//         // text: text,
//         // description: description
//     }
//     console.log("formData:", formData);
// }

// class User {

//     constructor(name){
//         this.name = name;
//     }

//     sayHi(){
//         document.writeln("Hello, " + this.name + "!");
//     }
// }

// let user = new User("Igor");
// // console.log(user);
// user.sayHi();

// console.log(typeof User);
// console.log(typeof user);

//-------------------
/* class User {

    constructor(login){
        this._login = login;
    }

    get login(){
        return this._login;
    }

    set login(value){
        if(value.length < 6){
            alert("Логин слишком короткий");
            return;
        }
        this._login = value;
    }
}

let user = new User("administrator");
alert(user.login);
user.login = "admin_admin";
alert(user.login);
user.login = "admin";
alert(user.login); */
//-------------------

/* class Person {
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName
    }

    set fullName(value){
        [this._firstName, this._lastName] = value.split(/\s+/g);
    }
}

let people = new Person("John", "Dou");
document.writeln(people.fullName + "<br>");
people.fullName = "Anna Petrova";
document.writeln(people.fullName + "<br>"); */

// console.log("Фттф Петрова".split(/\s+/g));
//-------------------

/* class Animal{
    static count = 0;

    constructor(name){
        this.speed = 0;
        this.name = name;
        Animal.count++;
    }

    static counter(){
        return Animal.count;
        // document.writeln(`${this.}`)
    }

    run(speed){
        this.speed = speed;
        document.writeln(`${this.name} бежит со скоростью ${this.speed} км/ч.<br>`);
    }

    stop(){
        this.speed = 0;
        document.writeln(`${this.name} стоит.<br>`)
    }
}

class Rabbit extends Animal{

    constructor(name, earLength){
        super(name);
        this.earLength = earLength;
    }

    hide(){
        document.writeln(`${this.name} прячется! <br>`);
    }

    stop(){
        super.stop();
        this.hide();
    }
}

let animal = new Animal("Мой питомец");
animal.run(80);
animal.stop();

document.writeln(`<br>`);

let rabbit = new Rabbit("Белый кролик", 10);
rabbit.run(5);
rabbit.hide();
rabbit.stop();

document.writeln(rabbit.name + `<br>`);
document.writeln(rabbit.earLength + `<br>`);

let animal2 = new Animal("Мой питомец 2");
let animal3 = new Animal("Мой питомец 3");
let animal4 = new Animal("Мой питомец 4");

document.writeln(Animal.counter());
document.writeln(Rabbit.counter()); */
//-------------------

class Header{
    constructor(img, h1, h2){
        this.src = img;
        this.h1 = h1;
        this.h2 = h2;
        this.out = "";
    }

    render(id){
        this.out = `
        <img src="${this.src}" alt="">
        <h1>${this.h1}</h1>
        <h2>${this.h2}</h2>
        `;

        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

class HeaderExt extends Header{
    constructor(img, h1, h2, tel){
        super(img, h1, h2);
        this.tel = tel;
    }

    render(id){
        super.render(id);
        this.out += `
            <h3>${this.tel}</h3>
        `;

        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

let img = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-128.png";

let header = new Header(img, "Заголовок", "Описание");
header.render("header");

let img2 = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-128.png";

let header2 = new Header(img2, "второй заголовок", "второе описание");
header2.render("header2"); 

let img3 = "https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/node-js-128.png";

let header3 = new HeaderExt(img3, "Заголовок в наследнике", "Описание в классе", "+7 999 123-45-67");
header3.render("header-ext");

// ---------- Занятие lesson 14 ----_JavaScript_ (order DZ_59)--------

/* class Header{
    constructor(img, h1, h2){
        this.src = img;
        this.h1 = h1;
        this.h2 = h2;
        this.out = "";
    }

    render(id){
        this.out = `
        <img src="${this.src}" alt="">
        <h1>${this.h1}</h1>
        <h2>${this.h2}</h2>
        `;

        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

class HeaderExt extends Header{
    constructor(img, h1, h2, tel){
        super(img, h1, h2);
        this.tel = tel;
    }

    get tel(){
        return this._tel;
    }

    set tel(t){
        let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if(reg.test(t)){
            this._tel = t;
        } else {
            alert("Некорректный номер телефона");
            return;
        }
    }

    render(id){
        super.render(id);
        this.out += `
            <h3>${this.tel}</h3>
        `;

        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

let img = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-128.png";

let header = new Header(img, "Заголовок", "Описание");
header.render("header");

let img2 = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-128.png";

let header2 = new Header(img2, "второй заголовок", "второе описание");
header2.render("header2"); 

let img3 = "https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/node-js-128.png";

let header3 = new HeaderExt(img3, "Заголовок в наследнике", "Описание в классе", "+7 999 123-45-67");
// ------------

// header3.tel = "Hello";
header3.tel = "+7 999 123-45-67";

header3.render("header-ext"); */

//-----------------------------------------

// let info = '{"first_name":"Ivan","age":36,"mather":{"name":"Olga"},"children":["Kate","Igor","Misha"],"married":true,"dog":null}';
// console.log(info);


// JSON.stringify - преобразует объект JS в JSON (сериализация)
// JSON.parse - преобразует объект JSON в JS (десериализация)
// AJAX :
// Asyncronus
// JavaScrtipt
// AND
// XML (JSON)

// let person = JSON.parse(info);
// console.log(person);

// person.first_name = "Petr";

// delete(person.age);

// person.work = "programmer";

// // delete(person.children[1]);  // просто чистит
// person.children.splice(1,1);
// person.children.push("Ira");

// for (let i in person){
//     document.writeln(i + ": " + person[i] + "<br>");
// }

// let personString = JSON.stringify(person);
// console.log(personString);

// let request = new XMLHttpRequest();
// request.open("GET", "data.txt");  // (method, url, async, login, password)

// request.send();
// request.onreadystatechange = function(){
//     if((request.readyState == 4) && (request.status == 200)){
//         document.writeln(request.response);
//     }
// }

// ---------- Занятие lesson 15 ----_JavaScript_ (order DZ_60)--------

// ....

// let a = "global";
// function outer(){
//     let b = "outer";
//     function inner(){
//         let c = "inner";
//         console.log("c", c);
//         // console.log("b", b);
//         // console.log("a", a);

//     }
//     inner();
//     console.log("b", b);
// }

// outer();
// // console.log("c", c);
// // console.log("b", b);
// console.log("a", a);


// function createCalc(n){
//     return function(){
//         console.log(10 * n);
//     }
// }

// // createCalc(34);
// let calc = createCalc(34);
// // console.log(calc);
// calc();


// function increment(n) {
//     return function (num) {
//         return n + num;
//     }
// }

// let one = increment(1);
// console.log(one(10));
// console.log(one(32));

// let ten = increment(10);
// console.log(ten(10));
// console.log(ten(32));


// function urlGenerator(domain){
//     return function(url){
//         return `https://${url}.${domain}`;
//     }
// }

// let ruUrl = urlGenerator("ru");
// console.log(ruUrl("yandex"));
// console.log(ruUrl("mail"));

// let comUrl = urlGenerator("com");
// console.log(ruUrl("google"));
// console.log(ruUrl("youtube"));

// 1-й способ (передачи this):
// let person = {
//     age: 24,
//     name: "Irina",
//     job: "Programmer",
//     displayInfo: function(ms){
//         // console.log(this);
//         let self = this;
//         setTimeout(function(){
//             console.log("inner:", self);
//             console.log("name:", self.name);
//             console.log("age:", self.age);
//             console.log("job:", self.job);
//         }, ms);
//     }
// }

// // console.log("!!!", this);
// person.displayInfo(2000);

// 2-й способ:
// let person = {
//     age: 24,
//     name: "Irina",
//     job: "Programmer",
//     displayInfo: function(ms){

//         setTimeout(function(){
//             console.log("inner:", this);
//             console.log("name:", this.name);
//             console.log("age:", this.age);
//             console.log("job:", this.job);
//         }.bind(this), ms);
//     }
// }

// // console.log("!!!", this);
// person.displayInfo(2000);

// 3-й способ:
// let person = {
//     age: 24,
//     name: "Irina",
//     job: "Programmer",
//     displayInfo: function (ms) {

//         setTimeout(() => {
//             console.log("inner:", this);
//             console.log("name:", this.name);
//             console.log("age:", this.age);
//             console.log("job:", this.job);
//         }, ms);
//     }
// }

// // console.log("!!!", this);
// person.displayInfo(2000);


// function first() {
//     setTimeout(function(){
//         console.log("Первый");

//         setTimeout(function(){
//             console.log("Второй");            
//         }, 100);
//     }, 1000);
// }

// // function second() {
// //     console.log("Второй");
// // }

// first();
// // second();

// Click -> Server -> Database -> Server -> Client

// структура "коллбэк" функции
/* console.log("Клиент: хочу получить список пользователей");
console.log("...");

setTimeout(function(){
    console.log("Сервер: запрашиваю список пользователей в базе данных");
    console.log("...");

    setTimeout(function(){
        console.log("БД: Формирую список пользователей")
        console.log("...");

        setTimeout(function(){
            console.log("Сервер: трансформирую данные для клиента");
            console.log("...");

            setTimeout(function(){
                console.log("Клиент: получил данные и отображаю их");
                // console.log("...");
            }, 1000);
        }, 500);
    }, 500);
}, 1000); */

//------------ моя копия кода (ниже посмотреть, что не так)----
// console.log("Клиент: хочу получить список пользователей");
// console.log("...");

// let promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let users = [
//                 {uid: "id", name: "Igor"},
//                 {uid: "id2", name: "Irina"}
//             ]
//         console.log("Сервер: запрашиваю список пользователей в БД");
//         console.log("...");
//         resolve(users);
//     }, 1000);
// });

// // promise.then(function(){
// //     setTimeout(function(){
// //         console.log("БД: Формирую список пользователей")
// //         console.log("...");
// //     }, 500);
// // })


// promise.then(function(dbUsers){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             let users = dbUsers.map(function(user){
//                 return{
//                     id: user.uid,
//                     firstName: user.name,
//                     timestamp: Data.now()
//                 }
//             })
//             console.log("БД: Формирую список пользователей")
//             console.log("...");
//             resolve(users);
//         }, 500);
//     })
// })
// .then(function(users){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log("Сервер: трансформирую данные для клиента");
//             console.log("...");
//             resolve();
//         }, 500);
//     })
// })
// .then(function(){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             console.log("Клиент: получил данные и отображаю их");
//             // console.log("...");
//             resolve();
//         }, 1000);
//     })
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log("finally");
// });

//----------------- копия кода от Елены Анатольевны (выше посмотреть, что не так)----

/* console.log("Клиент: хочу получить список пользователей");
console.log("...");
 
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Сервер: запрашиваю список пользователей в БД");
        console.log("...");
        resolve();
    }, 1000);
});
 
// promise.then(function(){
//     setTimeout(function(){
//         console.log("БД: формирую список пользователей");
//         console.log("...");
//     }, 500);
// })
 
promise.then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let users = [
                {uid: "id1", name: "Igor"},
                {uid: "id2", name: "Irina"},
            ]
            // reject("База данных не смогла получить список пользователей")
            console.log("БД: формирую список пользователей", users);
            console.log("...");
            resolve(users);
        }, 500);
    })
})
.then(function (dbUsers) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Сервер: трансформирую данные для клиента");
            console.log("...");
            let users = dbUsers.map(function(user){
                return {
                    id: user.uid,
                    firstName: user.name,
                    timestamp: Date.now()
                }
            })
            resolve(users)
        }, 500);
    })
})
.then(function (users) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Клиент: получил данные и отображаю их", users);
            resolve()
        }, 1000);
    })
})
.catch(function(error){
    console.log(error);    
})
.finally(function(){
    console.log("Finally");    
}); */

//----------end--- копия кода от Елены Анатольевны (выше посмотреть, что не так)----