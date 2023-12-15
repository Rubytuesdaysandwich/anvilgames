<template>
    <div class="character-creation-container">
        <canvas>

        </canvas>
        <div class="character-attribute-selector-box">
            <div class="color-selectors">
                <div>
                    <label class="input-description" for="head">head</label><input type="color">
                </div>
                <div>
                    <label class="input-description" for="body">body</label><input type="color">
                </div>
                <div>
                    <label class="input-description" for="arms">arms</label><input type="color">
                </div>
                <div>
                    <label class="input-description" for="legs">legs</label><input type="color">
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default{
    name:"CharacterCreation"
}

</script>

<style>
.character-creation-container{
    border:rgb(253, 253, 253) solid 2px;
    height:22rem;
    width: 30rem;
    display: flex;
}
.character-creation-container > canvas{
    display: flex;
    justify-content: start;
    align-content: center;
    align-self:center;
    margin-left: 16px;

}
canvas{

    height: 20rem;
    width:15rem;
    border: green solid 0.125rem;
    border-radius: 60px;
    
}
.character-attribute-selector-box{
    width:100%;
    display: flex;
    justify-content: end;
    
}
.color-selectors{
    display: flex; 
    flex-direction:column;
    justify-content: space-around;
    text-align: end;
    margin-right:2rem; 
}
.input-description{
    margin-right: 1rem;
    color: yellow;
    font-size: 2rem;
}





</style>