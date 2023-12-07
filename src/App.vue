<template>
  <nav>
    <HeaderComponent/>
    <MobileHeaderComponent/>
  </nav>
  <router-view />
</template>

<script>
import HeaderComponent from './components/Header/HeaderComponent.vue';
import MobileHeaderComponent from './components/Header/MobileHeaderComponent.vue';
export default {
  components:{
    HeaderComponent,
    MobileHeaderComponent
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  
}
body{
  margin: 0;
  padding:0;
  background-image: linear-gradient(180deg, #aa0ff0 10vh , #4f1758 20vh , #030103 70vh);
  background-repeat: no-repeat;
  background-size: cover;
  background-size:100%;
  background-position: center;
  height: 100vh;
  width: 100vw;


}


</style>
