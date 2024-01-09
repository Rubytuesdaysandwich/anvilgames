import * as Phaser from 'phaser'
// Example usage for two different games with different physics engines we can call this function when we config the game engine for different types of games
// const gameConfig1 = createGameConfig(800, 600, ExampleScene1, 200, 'arcade');
// const gameConfig2 = createGameConfig(1200, 800, ExampleScene2, 300, 'p2');
export function createGameConfig(type, width, height, scene, gravity, physcicsType) {
    return {
        //pass in just the type canvas, webgl, our Auto
        type: Phaser.type == type,
        width: width,
        height: height,
        scene: {
            preload: scene.preload,
            create: scene.create,
            update: scene.update
        },
        physics: {
            default: physcicsType,
            [physcicsType]: {
                gravity: { y: gravity }
            }
        }
    }
}

export function preload(scene) {
}
export function create(scene) {
}

export function update(scene) {
}
