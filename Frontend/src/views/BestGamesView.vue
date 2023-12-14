<template>
  <div class="best">
    <h2>Best Games</h2>
    <flex-grid class="grid-container">

    </flex-grid>
   
  </div>
</template>
<script>
// import CardComponent from "@/components/gamecomponents/GameCard.vue";
import FlexGrid from '../components/body/FlexGrid.vue'
import { defineComponent } from 'vue';
export default defineComponent({
  components:{
    // CardComponent,
    FlexGrid
    
  }
})

</script>
<style scoped>
h2{
  color: white;
}

</style>