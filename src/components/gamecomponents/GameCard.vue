<template>
    <div class="card-container">
<h3>Game Title</h3>
<p>this is a little text to hold this place</p>
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
h3,p{
    color: white;
}
</style>