<template>
<div class="login-form-container">
    <form id="login"  action="/submit" method="post">
       
        <input v-model="form.email" type="Email" placeholder="Email" required>
        <input v-model="form.password" type="password" placeholder="Password" required>
        <div class="confirm">
        <button @click="cancel">Cancel</button>
        <button type="submit" @click="submit" >login</button>
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
             if(this.form.email === '' || this.form.password === ''){
                this.form.errors.push("Email required");
                this.form.errors.push("Password required");
                return;
            }else{
            console.log(e);
                e.preventDefault();
                this.$store.commit('login',{email:this.form.email,password:this.form.password});
                console.log(this.$store);
                this.$router.push('@/HomeView.vue');
            }
        },
        cancel(){
            this.$router.push('@/HomeView');
        },
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