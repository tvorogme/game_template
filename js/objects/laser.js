import * as PIXI from "pixi.js";

export class Laser {
    constructor(cur_x, cur_y, dist_x, dist_y) {
        this.cur_x = cur_x;
        this.cur_y = cur_y;
        this.r = 5;

        const deltaX = dist_x - cur_x;
        const deltaY = dist_y - cur_y;

        this.sin = deltaY / Math.sqrt(deltaX ** 2 + deltaY ** 2);
        this.cos = deltaX / Math.sqrt(deltaX ** 2 + deltaY ** 2);

        this.shag = 10;
    }

    // ToDo: Сделать метод, который вычисляет новый x и y
    calc_new_position = () => {
        this.cur_x += this.cos * this.shag;
        this.cur_y += this.sin * this.shag
    };

    draw() {
        // ToDo: Вызвать этот метод
        this.calc_new_position();

        // http://pixijs.download/dev/docs/PIXI.Graphics.html
        const graphics = new PIXI.Graphics();

        graphics.beginFill(0xFFFFFF);
        graphics.drawCircle(this.cur_x, this.cur_y, this.r);
        graphics.endFill();

        return graphics
    }
}