<template>
    <div class="outer-container"> 
        <!-- <div class="canvas-outline"> -->
            <FirstGame> </FirstGame>
        <!-- </div> -->
    </div>
</template>
<!-- if the game is initialized the game will show -->
<!-- games are managed using javascript as of this moment with phaser.js -->




<script>
// import { onMounted } from "vue";
import FirstGame from '../playableGames/gamesList/game1/FirstGame.vue'

// import gameG2 from '../playableGames/gamesList/game2/square.vue'
export default{
    name:"CurrentGameView",
    data(){
        return{
            initialize:false,
            game:null,
        };

    },
   components:{
    FirstGame,
    // gameG2,
   },
    
    methods:{
        // Example usage for two different games with different physics engines we can call this function when we config the game engine for different types of games
//start the game when the currentgameview page is reached
initializeGame (){
this.initialize = true;
},
 
    },
//     setup(){
//         // const gameCanvas =ref(null)//create a ref for gameCanvas
//         onMounted(() =>{
//             this.initializeGame();//run when the CurrentGameview component is loaded. Load when the user selects a game and are directed to the game through routing.
    
//         });
  
// }
}
</script>
<style scoped>
.outer-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center; /* Center the canvas horizontally */
  align-items: center; /* Center the canvas vertically */
}

p{
    color: white;
    font-size: larger;
    font-weight: bold;
  
}

</style>