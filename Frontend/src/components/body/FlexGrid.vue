<template>
  <div class="grid-container">
    <div v-for="game in games" :key="game.id">
      <GameCardComponent :game-info="game.gameInfo" :title="game.title" :game-image="'anvil-games-logo.jpg'"/>
    </div>
  </div>
</template>

<script lang="ts">
import GameCardComponent from '../gamecomponents/GameCard.vue'
import {getDummy} from "../../utils/api"//grabbing api data from here using fetch
import {defineComponent} from 'vue'

interface games {
  id: number;
  title: string;
  gameInfo: string;
}



export default defineComponent( {
    name:"FlexGrid",
    components:{
        GameCardComponent
    },
      data(){
    return{
    
     games:[] as games[]
    }
   },
  
 
   async mounted(){//this is the mounted cycle
    try{
         const data = await getDummy();
         console.log(data);//log the recieved data
    this.games = data.games;
    }catch (error){
      console.error('Error fetching data:', (error as Error).message)
    }
 
   }


})
</script>


<style scoped>
.grid-container {
display: flex;
flex-wrap: wrap;
justify-content: space-around;
justify-content: center;

}
.grid-container>div{
  border:solid yellow 2px;
  width:fit-content;
  margin: 1rem;
}
</style>