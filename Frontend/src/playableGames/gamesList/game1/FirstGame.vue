<template>

    <div ref="gameCanvas">
     
    </div>


</template>

<script lang="js" setup>
import * as Phaser from 'phaser';
import { createGameConfig } from '../../../utils/gameapi';
import {onMounted, ref, onBeforeUnmount } from 'vue';
import Scene1 from '../game1/Scene1';
import Scene2 from '../game1/Scene2';

        // const gameCanvas =ref<HTMLCanvasElement>();
        onMounted(()=>{
           const gameCanvas = ref(null)

           //the game will be started when mounted to the DOM
           // example const gameConfig1 = createGameConfig(800, 600, {ExampleScene1}, 200, 'arcade');
           // createGameConfig(type, width, height, backgroundColor, scene, gravity, physcicsType)
           const gameConfig = createGameConfig(1000,600, 0x000000,[new Scene1(), new Scene2()],200, 'arcade', { x: 400, y: 500 })
           const game = new Phaser.Game(gameConfig)
           
       gameCanvas.value = game.canvas
       return{gameCanvas}
       }
    );

    onBeforeUnmount(() => {
  // Cleanup Phaser game when component is about to be unmounted
  // activated when the user leave the game to another page to uncunstruct the phaser canvas
 
});
    
  
    
 

</script>
<style>



</style>