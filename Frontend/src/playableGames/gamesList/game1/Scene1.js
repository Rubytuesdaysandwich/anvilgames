//This scene scene 1 will be used to Boot or start the game!
import * as Phaser from 'phaser'
class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }
    preload() {
        // key/url 
        this.load.image("background", "world-objects/background.png")
    }
    create() {
        //the jump to scene 2 happens immedietly on loading so you will not see this one
        this.add.text(20, 20, "loading game...", { font: "25px Arial", fill: 'yellow' })
        // Load assets in the preload method
        this.scene.start("playGame")
    }
}
export default Scene1