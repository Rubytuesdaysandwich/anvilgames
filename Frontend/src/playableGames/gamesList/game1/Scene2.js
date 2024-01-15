import * as Phaser from 'phaser'
import { createGameConfig } from '../../../utils/gameapi';

// let config;
class Scene2 extends Phaser.Scene {
    constructor() { super("playGame") }
    // Declare ship2 property without initializing it

    create() {
        this.background = this.add.image(0, 0, "background");
        console.log(this.background);
        this.background.setOrigin(0, 0);

        this.ship1 = this.add.image(createGameConfig.width / 2 - 50, createGameConfig.height / 2, "ship")
        this.ship2 = this.add.image(createGameConfig.width / 2, createGameConfig.height / 2, "ship2")
        this.ship3 = this.add.image(createGameConfig.width / 2 + 50, createGameConfig.height / 2, "ship3")

        this.add.text(20, 20, 'playing game', { font: "25px Arial", fill: 'yellow' });

    };


}
export default Scene2