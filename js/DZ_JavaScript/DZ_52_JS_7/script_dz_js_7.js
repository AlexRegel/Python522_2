// DZ_52 (index_dz_52_js_7.html)
// Создать две кнопки, при нажатии на одну из которых 
// картинка будет появляться, на другую - изчезать.

// let picture = document.getElementById("image")
let picture = document.querySelector("#picture");
// show picture:

function showPic() {
    picture.src = "bird_beauty.png";
}
function hidePic() {
    picture.src = "";
}

// console.log(showPic);
// console.log(hidePic);
