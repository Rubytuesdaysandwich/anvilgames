
//!You will need JWT tokens for users to not be logged out when the page is reloaded.
<template>
<div class="create-form-container">
    <form action="submit">
        <div class="user-data-container">
        <div class="user-data">   
                <input type="text" placeholder="UserName"> 
                <input type="text"  placeholder="Password"> 
        </div>
        <div class="user-data">
                <input type="email"  placeholder="Email">
                <input type="date"  placeholder="Age">
            <label for="birthday" id="birthday" name="">Age</label>
            <CharacterCreation></CharacterCreation>

        </div>
        </div>
        <div class="confirm">
            <button @click.prevent="cancel" type="button" >Cancel</button>
            <button  type="submit">submit</button>
        </div>
    </form>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CharacterCreation from './CharacterCreation.vue'
export default defineComponent( {
    name:'CreateUser',
 components:{
    CharacterCreation,
 },
 methods:{
    cancel(){
                this.$router.push('/');
                return;
            },
 }
})
</script>

<style scoped>
.create-form-container{
    display: flex;
    justify-content: center;
}
form{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: start;

}

input{
    margin:1rem;
    
    
}


.confirm{
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    gap: 5rem;

}
.confirm>button{
    font-size: 1.5rem;
}
</style>