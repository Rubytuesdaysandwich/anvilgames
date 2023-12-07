<template>
  <div class="best">
    <h2>Best Games</h2>
    <CardComponent>
        <!-- <game-image></game-image> -->
    </CardComponent>
     <CardComponent>

    </CardComponent>
     <CardComponent>

    </CardComponent>
     <CardComponent>

    </CardComponent>
  </div>
</template>
<script>
import CardComponent from "@/components/gamecomponents/GameCard.vue";

export default{
  components:{
    CardComponent,
    
  }
}

</script>
<style scoped>
h2{
  color: white;
}
</style>