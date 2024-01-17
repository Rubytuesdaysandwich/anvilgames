<template>
<div>

</div>
</template>

<script lang="js" setup>
import * as Phaser from 'phaser';
import { createGameConfig } from '../../../utils/gameapi';
import {onMounted, onBeforeUnmount } from 'vue';
import Scene1 from '../game1/Scene1';
import Scene2 from '../game1/Scene2';

        // const gameCanvas =ref<HTMLCanvasElement>();
   
        onMounted(()=>{

           //the game will be started when mounted to the DOM
           // example const gameConfig1 = createGameConfig(800, 600, {ExampleScene1}, 200, 'arcade');
           // createGameConfig(type, width, height, backgroundColor, scene, gravity, physcicsType)
          const gameConfig = createGameConfig(500,500, 0x199B9B,[new Scene1(), new Scene2()],200, 'arcade');
          // gameConfig.value 
          new Phaser.Game(gameConfig);
           
           
         return{gameConfig}
      
       }
    );

    onBeforeUnmount(() => {
  // Cleanup Phaser game when component is about to be unmounted
  // activated when the user leave the game to another page to uncunstruct the phaser canvas
 //not working yet
 
});



    
  
    


</script>
<style scoped>
.gameContainer{
  display: flex;
  justify-content: center;
}

</style>