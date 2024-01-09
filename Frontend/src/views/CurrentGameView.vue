<template>
    <div>
        <p>Hello you are currently on the current GameView Page where the game will be initialized</p>
        <div ref="gameContainer"  class="canvas-outline">
            
        </div>
    </div>
</template>
<!-- if the game is initialized the game will show -->
<!-- games are managed using javascript as of this moment with phaser.js -->




<script>
import * as Phaser from "phaser"
import { onMounted, ref } from "vue";


export default{
    name:"CurrentGameView",
    data(){
        return{
            initialize:false,
            game:null,
        };

    },
    methods:{
        // Example usage for two different games with different physics engines we can call this function when we config the game engine for different types of games
// const gameConfig1 = createGameConfig(800, 600, ExampleScene1, 200, 'arcade');
// const gameConfig2 = createGameConfig(1200, 800, ExampleScene2, 300, 'p2');
//// createGameConfig(width,height,scene,gravity,physcicsType){
//    return{

//        type:Phaser.AUTO,
//         width:width,
//         height:height,
//         scene:scene,
//         physcics:{
//             default:physcicsType,
//             [physcicsType]:{
//                 gravity:{y:gravity}
//             }
//         }
//     }
// },
//start the game when the currentgameview page is reached
initializeGame (){
this.initialize = true;
this.$refs.gameContainer
},
 
    },
    setup(){
        const gameCanvas =ref(null)//create a ref for gameCanvas
        onMounted(() =>{
            this.initializeGame();//run when the CurrentGameview component is loaded. Load when the user selects a game and are directed to the game through routing.
            //access the gamecanvas ref
            console.log(gameCanvas.value);
            //create phaser game instance?▼
        });
        return{gameCanvas//make the ref accessible in the template}
    }
     
        //create a new phaser game instance
        
        

        
        // Ensure canvasElement is a valid HTMLCanvasElement
        
        
        // /**
        //  * Creates the first game
        //  * @param {HTMLCanvasElement} canvasElement 
        //  */
        // function Game1(canvasElement) {
            //     const game = new Phaser.Game({
                //     canvas: canvasElement
                // });
}
}
</script>
<style scoped>
.canvas-outline{
border: white solid 2px;
width: fit-content;
display: flex;
justify-content: center;
}
p{
    color: white;
    font-size: larger;
    font-weight: bold;
  
}

</style>