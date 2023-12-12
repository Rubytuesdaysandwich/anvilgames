<template>
  <div class="grid-container">
    <div v-for="game in games" :key="game.id">
      <GameCardComponent :game-info="game.gameInfo" :title="game.title" :gameImage="'anvil-games-logo.jpg'"/>
    </div>
  </div>
</template>

<script>
import GameCardComponent from '../gamecomponents/GameCard.vue'
import {getDummy} from "../../utils/api"//grabbing api data from here using fetch

export default {
    name:"FlexGrid",
    components:{
        GameCardComponent
    },
      data(){
    return{
     games: []
    }
   },
   async mounted(){//this is the mounted cycle
    const data = await getDummy();
    this.games = data.games;
   }


}
</script>


<style scoped>
.grid-container {
display: flex;
flex-wrap: wrap;
justify-content: space-around;
justify-content: start;

}
.grid-container>div{
  border:solid yellow 2px;
  width:fit-content;
  margin: 1rem;
}
</style>