import * as PIXI from 'pixi.js';

// Загружаем стили. Импортируем, для того чтобы webpack сам с ними разоборался
import '../styles/index.css'

const ratio = window.devicePixelRatio;
const logicalWidth = window.innerWidth;
const logicalHeight = window.innerHeight;

// http://pixijs.download/dev/docs/PIXI.Application.html
const renderer = PIXI.autoDetectRenderer(
    logicalWidth,
    logicalHeight,
    {backgroundColor: 0x00000, resolution: 2});

// http://pixijs.download/dev/docs/PIXI.Container.html
const stage = new PIXI.Container();

// http://pixijs.download/dev/docs/PIXI.Graphics.html
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFFFFFF);
graphics.drawCircle(170, 120, 10);
graphics.endFill();

stage.addChild(graphics);


// start animating
animate();

function animate() {
    requestAnimationFrame(animate);

    renderer.render(stage);
}

// Wait for document loaded
window.onload = function () {
    // Add PIXI to page
    document.getElementById("main").appendChild(renderer.view);

    // High res displ.
    const canvas = renderer.view;
    canvas.width = logicalWidth * 2;
    canvas.height = logicalHeight * 2;
    canvas.style.width = logicalWidth + 'px';
    canvas.style.height = logicalHeight + 'px';
};