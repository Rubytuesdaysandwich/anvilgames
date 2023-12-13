<template>
<div class="login-form-container">
    <form  action="submit">
       
        <input v-model="form.email" type="Email" placeholder="Email" required>
        <input v-model="form.Password" type="password" placeholder="Password" required>
        <div class="confirm">
        <button>Cancel</button>
        <button @click="submit" >login</button>
        </div>
    </form>
</div>
</template>


<script>
export default {
    name:'LoginForm',
    data(){
        return{
            form:{
                email:"",
                password:"",
            }
        }
    },
    methods:{
        submit(e){
            e.preventDefault()
            this.$store.commit('login',this.form.email)
            this.$router.push('/Frontend/src/views/HomeView.vue')
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