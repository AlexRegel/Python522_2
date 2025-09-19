// DZ_62 (index_dz_62_js_17.html)

// Задание: Написанную на занятии игру необходимо раскрасить.
// Игрово квадрат должен при каждом нажатии менять цвета.

let start = document.querySelector("#start");
let game = document.querySelector("#game");
let time = document.querySelector("#time");
let timeHeader = document.querySelector("#time-header");
let resultHeader = document.querySelector("#result-header");
let result = document.querySelector("#result");
let gameTime = document.querySelector("#game-time");
let score = 0;
let isGameStarted = false;

start.addEventListener("click", startGame);
game.addEventListener("click", handlBoxClick);
gameTime.addEventListener("input", setGameTime);

function startGame() {
    // console.log("Start");
    score = 0;
    setGameTime();
    gameTime.setAttribute('disabled', 'true');
    timeHeader.classList.remove('hide');
    resultHeader.classList.add('hide');
    isGameStarted = true;
    start.classList.add('hide');
    game.style.background = "#FFF";

    let interval = setInterval(function () {
        let t = time.textContent;
        if (t <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            time.textContent = (t - 0.1).toFixed(1);
        }

    }, 100);

    renderBox();
}

function setGameTime() {
    let tm = +gameTime.value;
    time.textContent = tm.toFixed(1);
    timeHeader.classList.remove('hide');
    resultHeader.classList.add('hide');
}

function endGame() {
    isGameStarted = false;
    game.innerHTML = "";
    result.textContent = score;
    gameTime.removeAttribute('disabled');
    start.classList.remove('hide');
    game.style.background = "#9be8fb";
    timeHeader.classList.add('hide');
    resultHeader.classList.remove('hide');
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function renderBox() {
    game.innerHTML = "";
    let box = document.createElement("div");
    let boxSize = getRandom(30, 100);

    let gameSize = game.getBoundingClientRect();
    let maxTop = gameSize.height - boxSize;
    let maxLeft = gameSize.width - boxSize;

    box.style.width = box.style.height = boxSize + "px";
    let createColor = () => {
        let r = parseInt(Math.random() * 256);  // Math.floor
        let g = parseInt(Math.random() * 256);
        let b = parseInt(Math.random() * 256);
        // box.style.background = "#000";
        box.style.background = `rgb(${r}, ${g}, ${b})`;
    }
    createColor();
    box.style.position = "absolute";
    box.style.top = getRandom(0, maxTop) + "px";
    box.style.left = "70px";
    box.style.cursor = "pointer";
    box.setAttribute("data-box", 'true');

    game.insertAdjacentElement("afterbegin", box);
}

function handlBoxClick(event) {
    // console.log(event.target.dataset.box);
    if (!isGameStarted) {
        return;
    }
    if (event.target.dataset.box) {
        score++;
        renderBox();
    }
}
