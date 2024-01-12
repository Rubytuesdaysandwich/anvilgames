<template>
    <div>
    <canvas ref="gameCanvas">
    
    
    </canvas>
    </div>
    </template>
    
    <script lang="js">
    import { AUTO } from 'phaser';
    import * as Phaser from 'phaser';
    import { createGameConfig } from '../../../utils/gameapi';
    import { onMounted } from 'vue';


    
    export default{
        name:"gameG2",
        data(){
            return{
                platforms:null,
            }
        },  
        setup(){
            let test2;
            onMounted(()=>{
                //the game will be started when mounted to the DOM
                // example const gameConfig1 = createGameConfig(800, 600, {ExampleScene1}, 200, 'arcade');
                // createGameConfig(type, width, height, scene, gravity, physcicsType)
                const gameConfig = createGameConfig(AUTO,800,600,{},200, 'arcade')
                const game = new Phaser.Game(gameConfig)
                
            });
            return{
                test2
            }
        },
        methods:{
        //phaser js methods 
        preload ()
        {
            this.load.image('test2','../../../../games/shared-assets/character-assets/testing character body.png');
            
    },
        //phaser js methods 
        create ()
        {
        //    this.add.image(200,300, 'test2');
            this.platforms = this.physics.add.staticGroup();

           this. platforms.create(400, 568, 'ground').setScale(2).refreshBody();

           this.platforms.create(600, 400, 'ground');
           this.platforms.create(50, 250, 'ground');
           this.platforms.create(750, 220, 'ground');
           this. test2 = this.add.sprite(400, 300, 'test2');
            },

         
        //phaser js methods   
        },
        update() {
        // Phaser update logic for GameG1
        // ... update logic
    },
}

    </script>