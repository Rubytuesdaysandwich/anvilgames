<template>
<div>
  <nav>
    <HeaderComponent/>
    <MobileHeaderComponent/>
  </nav>
  <router-view/> 
</div>
</template>

<script>
import HeaderComponent from './components/Header/HeaderComponent.vue';
import MobileHeaderComponent from './components/Header/MobileHeaderComponent.vue';
import { defineComponent } from 'vue';
export default defineComponent( {
  
  components:{
    HeaderComponent,
    MobileHeaderComponent,},
     methods:{
    logout(){
      this.$store.commit('logout')
    },
    mounted(){
      this.$store.commit('initializeStore')
    }
  }
})
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
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  max-height: auto;
  width: 100vw;
  max-height: auto;
 overflow: hidden;
} 


// canvas{
//     // background-color: black;
//     width: 100%;
//     height: 100%;
//     margin: 0;
//     padding: 0;
   
// }


</style>
