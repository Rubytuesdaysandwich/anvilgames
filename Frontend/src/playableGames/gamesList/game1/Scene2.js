import * as Phaser from 'phaser'

// import { createGameConfig } from '../../../utils/gameapi';



class Scene2 extends Phaser.Scene {
    constructor() { super("playGame") }
 
    create() {
        console.log("top of create scene2");
        this.background = this.add.image(0, 0, "background").setDisplaySize(30, 400);
        this.background.setOrigin(0, 0);

        this.ship1 = this.add.sprite(120, 110, "ship");
        this.ship2 = this.add.sprite(350, 120, "ship2");
        this.ship3 = this.add.sprite(400, 350, "ship3");

        this.add.text(20, 20, 'playing game', { font: "25px Arial", fill: 'yellow' });
        console.log("I have reached here in create scene 2 end");
    };


}
export default Scene2