<template>
  <nav>
    <HeaderComponent/>
  </nav>
  <router-view />
</template>

<script>
import HeaderComponent from './components/Header/HeaderComponent.vue';

export default {
  components:{
    HeaderComponent
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
body{
  margin: 0;
  padding:0;
background-repeat: no-repeat;
background-size:100vw ;
background-image: linear-gradient(180deg, #aa0ff0 10% , #4f1758 20% , #030103 70%);


}


</style>
