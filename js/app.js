import * as PIXI from 'pixi.js';
import {World} from "./objects/world";

// Загружаем стили. Импортируем, для того чтобы webpack сам с ними разоборался
import '../styles/index.css'

// Создаём наш мир
const world = new World();

// http://pixijs.download/dev/docs/PIXI.Application.html
const renderer = PIXI.autoDetectRenderer(
    window.innerWidth,
    window.innerHeight,
    {backgroundColor: 0x00000, resolution: 2});

// Нажата ли кнопка
const keys = {"w": false, "s": false, "a": false, "d": false};

function animate() {
    // Позволяет рисовать каждый тик
    requestAnimationFrame(animate);

    // http://pixijs.download/dev/docs/PIXI.Container.html
    const stage = new PIXI.Container();

    world.get_items().forEach((item) => {
        // Достаём отрисованный объект
        const graphics = item.draw();

        // Добавляем его в Container
        stage.addChild(graphics)
    });

    // Отрисовываем в этом тике всё
    renderer.render(stage);

    // Смотрим на нажатые кнопки
    world.move(keys);
}

document.addEventListener('keydown', (ev) => {
    keys[ev.key] = true;
}, false);

document.addEventListener('keyup', (ev) => {
    keys[ev.key] = false;
}, false);

document.addEventListener('click', (ev) => {
    // ToDo: Вызывать метод click у World
    world.click(ev.x, ev.y);
}, false);


function setCanvasSize() {
    // Устанавливаем нужные параметры высоты и ширины для канваса
    const canvas = renderer.view;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    renderer.resize(window.innerWidth, window.innerHeight);

    world.player.x = window.innerWidth / 2;
    world.player.y = window.innerHeight / 2;
}

window.onresize = (ev) => {
    setCanvasSize();
};


// Начинаем рисовать!
animate();

// Wait for document loaded
window.onload = () => {
    // Достаём <div id="main"/> и суём туда canvas из renderer
    // View Page Source если не веришь
    document.getElementById("main").appendChild(renderer.view);
    setCanvasSize();
};