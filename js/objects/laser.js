import * as PIXI from "pixi.js";

export class Laser {
    constructor(cur_x, cur_y, dist_x, dist_y) {
        this.cur_x = cur_x;
        this.cur_y = cur_y;
        this.r = 5;

        this.dist_x = dist_x;
        this.dist_y = dist_y;
    }

    // ToDo: Сделать метод, который вычисляет новый x и y

    draw() {
        // ToDo: Вызвать этот метод

        // http://pixijs.download/dev/docs/PIXI.Graphics.html
        const graphics = new PIXI.Graphics();

        graphics.beginFill(0xFFFFFF);
        graphics.drawCircle(this.cur_x, this.cur_y, this.r);
        graphics.endFill();

        return graphics
    }
}