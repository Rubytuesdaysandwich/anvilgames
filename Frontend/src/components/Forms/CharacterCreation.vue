<template>
    <div class="character-creation-container">
        <canvas>

        </canvas>
        
            <ReusableTabWrapper>
                <TabContent title="1">
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
            </TabContent>
                <TabContent title="2">
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
                </TabContent>
                <TabContent title="3"> 
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
            </TabContent>
                <TabContent title="4">                
                    <div>
                        <label class="input-description" for="socks">socks</label><input type="color">
                    </div>
                    <div>
                        <label class="input-description" for="shoes">shoes</label><input type="color">
                    </div>
            </TabContent>
            </ReusableTabWrapper> 
        </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ReusableTabWrapper from '../body/ReusableTabWrapper.vue';
import TabContent from '../body/TabContent.vue'
export default defineComponent({
    name:"CharacterCreation",
components:{
    ReusableTabWrapper,
    TabContent
},
    data(){
return{
  
}
    },
})

</script>

<style>
.character-creation-container{
    border:rgb(253, 253, 253) solid 2px;
    height:22rem;
    width: 31.5rem;
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
.input-description{
    margin-right: 1rem;
    color: yellow;
    font-size: 2rem;
}
</style>