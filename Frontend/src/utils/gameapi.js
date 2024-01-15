import * as Phaser from 'phaser'
// Example usage for two different games with different physics engines we can call this function when we config the game engine for different types of games
// const gameConfig1 = createGameConfig(800, 600, ExampleScene1, 200, 'arcade');
// const gameConfig2 = createGameConfig(1200, 800, ExampleScene2, 300, 'p2');
export function createGameConfig(width, height, backgroundColor, scene, gravity, physicsType) {

    return {
        //pass in just the type canvas, webgl, our Auto
        type: Phaser.AUTO,
        backgroundColor: backgroundColor,
        scene
        ,
        physics: {
            default: physicsType,
            [physicsType]: {
                gravity: { y: gravity }
            }
        },
        scale: {
            width: width,
            height: height,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            mode: Phaser.Scale.FIT,
        }

    }
}


