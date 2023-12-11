<template>
    <div class="card-container">
        <div class="game-image-container">
            <img src="../../assets/anvil-games-logo.jpg" alt="">
        </div>
        <div class="game-info">
        <h4 class="game-title">Game Title</h4>
        <p>this is a little text to hold this place</p>
        </div>


    
    </div>
</template>
<script >

export default{
    name:"CardComponent",
    components:{

   
 }
}
</script>

<style scoped>

.card-container{
   
    margin: 20px;
    color: black;
    background-color: black;
    border:solid white 3px;
    border-top-left-radius: 10%;
    border-bottom-left-radius:10% ;
    height: 112px;
    width: 305px;
    display: flex;
    flex-grow: 0;
}
.game-image-container img{
     border-top-left-radius: 30%;
    border-bottom-left-radius:30% ;
    height:100%;
    width: 105px;
    justify-content: start;
    flex-grow: 1;

}
.game-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    flex-grow: 1;

}
.game-title{
margin-bottom:1rem;
flex-grow: 1;
}
 h4,p{
    color: white;
    width: 50%;
    margin:  0;
    word-wrap: normal;
    flex-grow: 1;
   
}
</style>