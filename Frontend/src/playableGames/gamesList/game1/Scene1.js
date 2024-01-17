//This scene scene 1 will be used to Boot or start the game!
import * as Phaser from 'phaser'

class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }
    preload() {
        // key/url 
        this.load.image("background", "world-objects/background/background.png");
        this.load.image("ship", "character-assets/ship.png");
        this.load.image("ship2", "character-assets/ship2.png");
        this.load.image("ship3", "character-assets/ship3.png");


    }

    create() {
        //the jump to scene 2 happens immedietly on loading so you will not see this
        this.add.text(20, 20, "loading game...", { font: "25px Arial", fill: 'yellow' });
        this.add.sprite(200, 40, "ship");
        // Load assets in the preload method
        this.scene.start("playGame");

    }
}
export default Scene1
