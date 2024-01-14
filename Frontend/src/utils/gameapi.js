import * as Phaser from 'phaser'
// Example usage for two different games with different physics engines we can call this function when we config the game engine for different types of games
// const gameConfig1 = createGameConfig(800, 600, ExampleScene1, 200, 'arcade');
// const gameConfig2 = createGameConfig(1200, 800, ExampleScene2, 300, 'p2');
export function createGameConfig(width, height, backgroundColor, scene, gravity, physicsType) {
    return {
        //pass in just the type canvas, webgl, our Auto
        type: Phaser.AUTO,
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        scene: {
            preload: scene.preload,
            create: scene.create,
            update: scene.update
        }
        ,
        physics: {
            default: physicsType,
            [physicsType]: {
                gravity: { y: gravity }
            }
        },
        scale: {
            position: { x: window.innerWidth / 2 - width / 2, y: window.innerHeight / 2 - height / 2 }
        }
    }
}


