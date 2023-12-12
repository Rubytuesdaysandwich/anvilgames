<template>
    <div class="grid-container">
    <div v-for="games in displayGamesList" :key="gameId.id">
<GameCardComponent :game-info="'placeholder'" :title="'titleText'" :gameImage="'anvil-games-logo.jpg'"/>
    </div>
    </div>
    
</template>

<script>
import GameCardComponent from '../gamecomponents/GameCard.vue'
import {getDummy} from '../../utils/api'

getDummy();//retrieving dummy data from the backend
console.log(getDummy);

export default {
    name:"FlexGrid",
    components:{
        GameCardComponent
    },
      data(){
    return{

    }
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