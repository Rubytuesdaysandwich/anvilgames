<template>

    <div  ref="gameCanvas">

    </div>


</template>

<script lang="js" setup>
import * as Phaser from 'phaser';
import { createGameConfig } from '../../../utils/gameapi';
import {onMounted, ref, onBeforeUnmount } from 'vue';
import Scene1 from '../game1/Scene1';
import Scene2 from '../game1/Scene2';

        // const gameCanvas =ref<HTMLCanvasElement>();
        const gameCanvas = ref(null)
        let game;//declaring game outtside the onMounted function
        onMounted(()=>{

           //the game will be started when mounted to the DOM
           // example const gameConfig1 = createGameConfig(800, 600, {ExampleScene1}, 200, 'arcade');
           // createGameConfig(type, width, height, backgroundColor, scene, gravity, physcicsType)
           const gameConfig = createGameConfig(1000,500, 0x199B9B,[new Scene1(), new Scene2()],200, 'arcade');
           const game = new Phaser.Game(gameConfig);
           
          
           gameCanvas.value = game.canvas
           
         
      
       }
    );

    onBeforeUnmount(() => {
  // Cleanup Phaser game when component is about to be unmounted
  // activated when the user leave the game to another page to uncunstruct the phaser canvas
 //not working yet
  if (game) {
    setTimeout(() => {
      game.destroy(true); // The true parameter destroys all active scenes and removes the canvas
    },0)
      }
});



    
  
    
 

</script>
<style scoped>


</style>