<template>
    <!-- if the game is initialized the game will show -->
<div v-if="intialize">
<canvas ref="gameCanvas">

</canvas>
</div>
</template>




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
createGameConfig(width,height,scene,gravity,physcicsType){
    return{

        type:Phaser.AUTO,
        width:width,
        height:height,
        scene:scene,
        physcics:{
            default:physcicsType,
            [physcicsType]:{
                gravity:{y:gravity}
            }
        }
    }
},

initializeGame (){
this.initialize = true;
}

    },
    onMounted(){
        this.initializeGame();//run when the CurrentGame component is loaded. it will be the only loaded component on screen
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

</script>