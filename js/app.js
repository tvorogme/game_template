import * as PIXI from 'pixi.js';
import {World} from "./objects/world";

// Загружаем стили. Импортируем, для того чтобы webpack сам с ними разоборался
import '../styles/index.css'

// Пиксель - не пиксель https://habr.com/post/229359/
const ratio = window.devicePixelRatio;

// Создаём наш мир
const world = new World();

// Берём размеры экрана
const logicalWidth = window.innerWidth;
const logicalHeight = window.innerHeight;

// http://pixijs.download/dev/docs/PIXI.Application.html
const renderer = PIXI.autoDetectRenderer(
    logicalWidth,
    logicalHeight,
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

// Начинаем рисовать!
animate();

// Wait for document loaded
window.onload = function () {
    // Достаём <div id="main"/> и суём туда canvas из renderer
    // View Page Source если не веришь
    document.getElementById("main").appendChild(renderer.view);
    // Устанавливаем нужные параметры высоты и ширины для канваса
    const canvas = renderer.view;
    canvas.width = logicalWidth * 2;
    canvas.height = logicalHeight * 2;
    canvas.style.width = logicalWidth + 'px';
    canvas.style.height = logicalHeight + 'px';
};