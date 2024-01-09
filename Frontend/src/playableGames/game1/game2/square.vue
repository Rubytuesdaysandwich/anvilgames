<template>
    <div>
    <canvas>
    
    
    </canvas>
    </div>
    </template>
    
    <script lang="js">
    import { AUTO } from 'phaser';
    import * as Phaser from 'phaser';
    import { createGameConfig } from '../../../utils/gameapi';
 

    
    export default{
        name:"gameG1",
        setup(){
            onMounted(){
                //the game will be started when mounted to the DOM
                // example const gameConfig1 = createGameConfig(800, 600, {ExampleScene1}, 200, 'arcade');
                const gameConfig = createGameConfig(AUTO,800,600,{},200, 'arcade')
                const game = new Phaser.Game(gameConfig)
                
            }
        }

}

    </script>