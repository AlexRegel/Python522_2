// DZ_53 (index_dz_53_js_8.html)

// Задание: произвести обмен местами картинок
// по кнопке (событию клика мыши).

let array = new Array('2.jpg', '3.jpg', '4.jpg');  // Исходный массив картинок
// Создадим интерфейс с картинками:
setPic();
function setPic(){
    for (let i = 0; i < array.length; i++){
        document.writeln("<img src='" + array[i] + "'>");
    }    
}
document.writeln("<div id='sorce'>поменять</div>");
document.writeln("<input type='number' min='1' max='3' value='1'>");
document.writeln("<div id='sorce2'>на</div>");
document.writeln("<input type='number' min='1' max='3' value='2'>");
document.writeln("<input type='button' id='btn' value='Поменять картинки'>");  // name='btn' кнопка

// document.getElementsByName('btn')[0].addEventListener('click', replacement);

let images = document.querySelectorAll("img");
let btn = document.querySelector("#btn");

btn.addEventListener("click", replacement);
// console.log("length = " + document.querySelectorAll("img").length);
console.log(array, array.length);  // array = ['2.jpg', '3.jpg', '4.jpg'];

function replacement() {  // array, in1, in2
    let el1 = document.querySelectorAll('input')[0].value;
    let el2 = document.querySelectorAll('input')[1].value;
    // console.log("el1 = " + el1);
    // console.log("el2 = " + el2);
    // Преобразуем значения элементов в индексы массива для исключения путаницы:
    let ind1 = el1-1;
    let ind2 = el2-1;
    // console.log("index1 = " + index1);
    // console.log("index2 = " + index2);
    // Условие на проверку идексов:  // if ((0 <= ind1 || ind1 < array.length) && (0 <= ind2 || ind2 < array.length))
    if ((0 <= ind1 < array.length) && (0 <= ind2 < array.length)) {
        // Присвоение исходного значения во временную переменную:
        let c = array[ind1];
        // Замена в элементов массива новыми значениями:
        array[ind1] = array[ind2];
        array[ind2] = c;

        // Интресно, что деструктуризация для обмена значениями тоже работает, 
        // видимо в контексте массивов. Поэтому можно и таким образом тоже:
        // [array[ind1], array[ind2]] = [array[ind2], array[ind1]];  

        images[ind1].src = array[ind1];
        images[ind2].src = array[ind2];
        // for (let i=0; i<images.length; i++){
        //     console.log(images[i].currentSrc);
        // }
        // // document.writeln(array);
        return console.log(array);
    }
}

// array = copyArray;
// console.log(array);
 

    // let image1 = document.querySelectorAll("img")[0];  // Доступ к картинке 1
    // let image2 = document.querySelectorAll("img")[1];  // Доступ к картинке 2
    // let image3 = document.querySelectorAll("img")[2];  // Доступ к картинке 3
    // console.log(image1);  // "image1.src = " + 
    // console.log(image2);  // "image1.src = " + 
    // console.log(image3);  // "image1.src = " + 