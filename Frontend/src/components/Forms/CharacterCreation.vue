<template>
    <div class="character-creation-container">
        <canvas>

        </canvas>
    <form action="">
        <div class="character-attribute-selector-box">
            <div class="color-selectors">
                <div>
                    <label class="input-description" for="hair">hair</label><input type="color">
                </div>
                <div>
                    <label class="input-description" for="head">head</label><input type="color">
                </div>
                <div>
                    <label class="input-description" for="eyes">eyes</label><input type="color">
                </div>
                <div>
                    <label class="input-description" for="body">body</label><input type="color">
                </div>
                
            </div> 
            <div   class="color-selectors">
                <div>
                    <label class="input-description" for="arms">arms</label><input type="color">
                </div>
                <div>
                    <label class="input-description" for="hands">hands</label><input type="color">
                </div>
                <div>
                    <label class="input-description" for="legs">legs</label><input type="color">
                </div>
                <div>
                    <label class="input-description" for="feet">feet</label><input type="color">
                </div>
                
            </div>
            <div   class="color-selectors">
                <div>
                    <label class="input-description" for="shirt">shirt</label><input type="color">
                </div>
                <div>
                    <label class="input-description" for="coat">coat</label><input type="color">
                </div>
                <div>
                    <label class="input-description" for="gloves">gloves</label><input type="color">
                </div>
                <div>
                    <label class="input-description" for="pants">pants</label><input type="color">
                </div>
                
            </div>
            <div  class="color-selectors">
                <div>
                    <label class="input-description" for="socks">socks</label><input type="color">
                </div>
                <div>
                    <label class="input-description" for="shoes">shoes</label><input type="color">
                </div>
            </div>
        </div>
    </form>
    <div class="next-color-selection">
            <button type="button"  @click.prevent="toggleColorSelectors">1</button>
            <button type="button"  @click.prevent="toggleColorSelectors">2</button>
            <button type="button"  @click.prevent="toggleColorSelectors">3</button>
            <button type="button"  @click.prevent="toggleColorSelectors">4</button>
        </div> 
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:"CharacterCreation",

    data(){
return{
  
}
    },
methods:
{
toggleColorSelectors(){

}


}
})

</script>

<style>

.next-color-selection{
    display: flex;
    justify-content: space-between;
    align-items: end;
}
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
    height: 100%;
    display: flex;
    justify-content: end;
    margin-left: 16px;
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

/* 
.hidden{
    display: none;
} */


</style>