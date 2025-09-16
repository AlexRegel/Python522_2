// DZ_60 (index_dz_60_js_15.html)

// Задание: Взять форму отправки данных и добавить вывод визуального 
// сообщения, отражающего отправку данных, через модальное окно.
// Также можно произвести проверку полей отправки данных.

let form = document.form1;

let massage = {
    loading: "Загрузка",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так..."
};

form.addEventListener("submit", event => {
    event.preventDefault();

    let msg = document.createElement("div");
    msg.textContent = massage.loading;
    msg.style.fontSize = "20px";
    form.append(msg);

    let request = new XMLHttpRequest();
    request.open("POST", "server.php");

    let formData = new FormData(form);
    request.send(formData)

    let mdp = document.querySelector(".modal-content p");
    let modal = document.querySelector('#modal');

    request.addEventListener("load", function(){
        if(request.status == 200){
            console.log(request.response);            
            mdp.textContent = massage.success;            
            modal.style.display = 'block';
            // alert(massage.success);  // msg.textContent = massage.success;
        } else {
            // msg.textContent = massage.failure;
            mdp.textContent = massage.failure;
            modal.style.display = 'block';
        }
        form.reset();
        setTimeout(()=> msg.remove(), 3000);
        setTimeout(()=> modal.style.display = 'none', 5000);
    })
})

let close = document.querySelector('.close');
close.onclick = function () { modal.style.display = 'none'; };

