<template>
<div class="login-form-container">
    <form action="submit">
        <input type="text" placeholder="UserName">
        <input type="text" placeholder="Password">
        <div class="confirm">
        <button>Cancel</button>
        <button>submit</button>
        </div>
    </form>
</div>
</template>


<script>
export default {
    name:'LoginForm'
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