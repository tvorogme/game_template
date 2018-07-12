export class Info {
    constructor(playerX, playerY) {
        this.text = `PlayerX: ${playerX}\nPlayerY: ${playerY}`
    }

    draw() {
        const basicText = new PIXI.Text(this.text, {fill: 0xFFFFFF, fontSize: 14});
        basicText.x = 0;
        basicText.y = 0;
        return basicText
    }
}