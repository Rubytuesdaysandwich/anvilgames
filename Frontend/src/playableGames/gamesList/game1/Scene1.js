//This scene scene 1 will be used to Boot or start the game!
import * as Phaser from 'phaser'
class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame")
    }
    create() {
        this.add.text(20, 20, "loading game...", { font: "25px Arial", fill: 'yellow' })
        this.scene.start("bootGame")

    }
}
export default Scene1