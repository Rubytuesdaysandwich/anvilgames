<template>
    <div class="outer-outer">
        <div id="outer-container" class="outer-container"> 
            <FirstGame> </FirstGame>    
        </div>
    </div>
</template>
<!-- if the game is initialized the game will show -->
<!-- games are managed using javascript as of this moment with phaser.js -->
<script>
import FirstGame from '../playableGames/gamesList/game1/FirstGame.vue'

export default{
    name:"CurrentGameView",
   components:{
    FirstGame,
   
   },
    

}
</script>
<style scoped>
    .outer-outer{
        margin: 16px;
    }
.outer-container {
  width: max-content;
  height: max-content;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center; /* Center the canvas horizontally */
  align-items: center; /* Center the canvas vertically */
}

p{
    color: white;
    font-size: larger;
    font-weight: bold;
    
}


</style>