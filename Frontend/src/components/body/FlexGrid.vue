<template>
    <div class="grid-container">
    <div>
<CardComponent></CardComponent>
    </div>

    </div>
    
</template>

<script>
import CardComponent from '../gamecomponents/GameCard.vue'
export default {
    name:"FlexGrid",
    components:{
        CardComponent
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