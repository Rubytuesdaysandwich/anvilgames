<template>
    <div class="card-container">
<GameImage/>
    
    </div>
</template>
<script >
import GameImage from './GameImage.vue'
export default{
    name:"CardComponent",
    components:{
   GameImage
   
 }
}
</script>

<style scoped>
.card-container{
    margin: 20px;
    color: black;
    background-color: black;
    border:solid white 3px;
    border-top-left-radius: 20%;
    border-bottom-left-radius:20% ;

    height: 112px;
    width: 305px;
}
</style>