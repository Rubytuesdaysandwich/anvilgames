<template>
<div class="login-form-container">
    <form id="login" @submit="checkForm" action="submit" method="post">
       
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
export default {
    name:'LoginForm',
    data(){
        return{
            
            form:{
                errors:[],
                email:"",
                password:"",
            }
        }
    },
    methods:{
        submit(e){
            e.preventDefault()
            this.$store.commit('login',this.form.email)
            this.$store.commit('login',this.form.password)
            this.$router.push('/Frontend/src/views/HomeView.vue')
        },
        checkForm(e){
            if(this.email && this.password){
             this.errors = [];
             return;
            }else if(!this.email){
                this.errors.push("Email required")
            }if(!this.password) this.errors.push("Password required")
        }
    }
}
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