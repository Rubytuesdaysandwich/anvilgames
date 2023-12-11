<template>
  <div class="home">
    <h2>All Games</h2>
  <flex-grid class="grid-container">

  </flex-grid>
    
</div>
</template>

<script>
// import CardComponent from "@/components/gamecomponents/GameCard.vue";
import FlexGrid from '@/components/body/FlexGrid.vue';
export default{
  components:{
    // CardComponent,
    FlexGrid,
  }
}

</script>
<style scoped>
h2{
  color: white;
 
}
/* .grid-container {
display: flex;
flex-wrap: wrap;
justify-content: space-around;
justify-content: start;

}
.grid-container>div{
  border:solid yellow 2px;
  width:fit-content;
  margin: 1rem;
} */


</style>