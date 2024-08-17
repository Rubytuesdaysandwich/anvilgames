import * as Phaser from 'phaser'
// import { gameConfig } from './FirstGame.vue'
import { createGameConfig } from '../../../utils/gameapi';

var gameConfig = createGameConfig(500, 500)
// console.log(gameConfig);


class Scene2 extends Phaser.Scene {
    constructor(config) {
        super("playGame");
        this.gameConfig = config;
    }

    create() {

        this.background = this.add.image(0, 0, "background")
        this.background.setDisplaySize(500, 500);
        this.background.setOrigin(0, 0);

        this.ship1 = this.add.sprite(120, 110, "ship");
        this.ship1.setScale(4);
        this.ship1.flipY = true;
        this.ship2 = this.add.sprite(350, 120, "ship2");
        this.ship3 = this.add.sprite(400, 350, "ship3");


        this.add.text(20, 20, 'playing game', { font: "25px Arial", fill: 'yellow' });

    }
    update() {
        this.moveShip(this.ship1, 1);
        this.moveShip(this.ship2, 2);
        this.moveShip(this.ship3, 3);
        this.ship1.angle += 50;
        this.ship2.angle += 40;

    }
    moveShip(ship, speed) {
        ship.y += speed;
        if (ship.y > gameConfig.scale.height)
            this.resetShipPost(ship);
    }
    resetShipPost(ship) {
        ship.y = 0
        let randomX = Phaser.Math.Between(0, gameConfig.scale.width);
        ship.x = randomX
    }

}
export default Scene2