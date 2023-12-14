<template>
<div class="login-form-container">
    <form id="login"  action="submit" method="post">
       
        <input v-model="form.email" type="Email" placeholder="Email" required>
        <input v-model="form.password" type="password" placeholder="Password" required>
        <div class="confirm">
        <button>Cancel</button>
        <button @click="submit" >login</button>
        </div>
    </form>
</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent( {
    name:'LoginForm',
    data(){
        return{
            
            form:{
                errors:[] as string[],//asserting the type accepted into this array
                email:'',
                password:'',
            }
        }
    },
    methods:{
        submit(e:Event){
            e.preventDefault()
            this.$store.commit('login',this.form.email)
            this.$store.commit('login',this.form.password)
            this.$router.push('@/HomeView.vue')
        },
        // checkForm(){
          
        //     if(!this.form.email && !this.form.password){
        //      this.form.errors = [];
        //      return;
        //     }else if(!this.form.email){
        //         this.form.errors.push("Email required")
        //     }if(!this.form.password) this.form.errors.push("Password required")
        // }
    }
})
</script>
<style scoped>
.login-form-container{
    display: flex;
    justify-content: center;
}
form{
    display: flex;
    justify-content: center;
    flex-direction: column;

}
input{
    margin:1rem;
}
.confirm{
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
}
</style>