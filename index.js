const Grid = document.querySelectorAll(".grid");
const character = document.querySelectorAll(".character");
const Speed = document.querySelector("input");
const speedValue = document.querySelector(".speed");
const Timer = document.querySelector(".time");
const Points = document.querySelector(".points");
const End = document.querySelector(".TimeEnd");
const Button = document.querySelector("button");
let time = 60;
let score = 0;
let result = 0;

function start() {
    let speed = Speed.value;
    for (let i of Grid) {
        i.classList.remove("character");
        i.addEventListener("click", () => {
            BlockControl(i);
        });
    }
    Off();
    RandomBlock(speed);
    EndGame();
}

function BlockControl(i) {
    if (i.id === hit) {
        i.classList.remove("character");
        result++;
        Points.innerHTML = `points ${result}`;
        hit = null;
    }
}

function Off() {
    Button.classList.add("disabled");
    Speed.classList.add("disabled");
}

function RandomBlock(speed) {
    let position = Grid[Math.floor(Math.random() * 9)];
    position.classList.add("character");
    time--;
    Timer.innerHTML = `Time : ${time}`;
    hit = position.id;
    setTimeout(start, speed);
    setTimeout(time, 10000);
}

function EndGame() {
    if (time === 0) {
        setInterval(() => {
            clearTimeout(start);
            window.location.reload(true);
            alert(`Good game points : ${result} / 60`);
        }, 10);
    }
}
