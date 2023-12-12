<template>  
<div>
  <div class="anvil-gaming-logo">
    <img>
    <div class="login-create">
    <router-link to='/login'>Login</router-link>
    <router-link to='/creat_user'>create User</router-link>
    </div>
  </div>
      <header>
            <nav>
              <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/trending_games">Trending</router-link>
      <router-link to="/best_games">Best Games</router-link>
      <router-link to="/new_games">New Games</router-link>
              </ul>
            </nav>
      </header>
</div>

</template>

<script lang="ts">
// import { Fragment } from 'vue'
export default {
  name:"HeaderComponent",
  components:{
    
  },
  
};
</script>

<style lang="scss" scoped>
  .anvil-gaming-logo{
  background-image:url('../../assets/anvil games logo-2.jpg');
  background-repeat: no-repeat;
  background-position:left;
  background-color: white;
  height: 110px;
  width: 100%;
  }
  .login-create{
display: flex;
justify-content: end;
margin-right: 50px;
  }

  .login-create > a{
    margin: 1rem;
    background-color: #2c3f53;
    color: white;
    font-size: 25px;
  }
header{
  display: flex;
  justify-content: center;
}
nav {
  padding: 30px;

  a {
    
    font-weight: bold;
    color: #e5e9ec;
    text-decoration: none;
    margin: 1rem;
    padding: 0.25rem;
    border: solid 0.125rem;
    border-radius: 0.5rem;

    &.router-link-exact-active {
      color: rgb(255, 136, 0);
      font-size: 30px;
    }

  }
}
@media (max-width: 935px) {//this here will hide the desktop navigation when the device reaches 935px
  header {
    display: none;
  }
  .anvil-gaming-logo{
    display: none;
  }
}
</style>