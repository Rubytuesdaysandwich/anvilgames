<template>

  <div class="menu-container">
    <div class="header-bars">
      <div class="mobile-menu-icon">
            <font-awesome-icon
              class="bars"
              :icon="['fas', 'bars']"
              @click="toggleMobileMenu"
            />
      </div>
    </div>
    <div :class="{ hidden: headerActive }">
        <header class="mobile-header-menu">
          <div class="anvil-gaming-logo">
    <img src="../../assets/anvil-games-logo.jpg" alt="">
          </div>
              <nav>
                <ul>
                    <div class="login-create">
                      <router-link v-if="!$store.state.user.email" to='/login'>Login</router-link>
                      <a v-if="$store.state.user.email" @click="logout">Logout</a>
                      <router-link to='/creat_user'>create User</router-link>
                    </div>
                      <router-link to="/">Home</router-link>
                      <router-link to="/trending_games">Trending</router-link>
                      <router-link to="/best_games">Best Games</router-link>
                      <router-link to="/new_games">New Games</router-link>
                </ul>
              </nav>
        </header>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:"MobileHeaderComponent",
    data() {
    return {
      headerActive: true,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.headerActive = !this.headerActive;
      console.log(this.headerActive);
    },
    logout(){
      this.$store.commit('logout')
    },
  },
})
</script>




<style lang='scss' scoped>
    .mobile-menu-icon {
        color:rgb(200, 15, 15);
        font-size: 5rem;
        display: flex;
        justify-content: end;
        gap: 5rem;
        cursor: pointer;
      
        
       
    }
    .anvil-gaming-logo{
      display: flex;
      justify-content: center;
   
    }
 .anvil-gaming-logo > img{
width: 100%;
height: 5rem;

 }
 
  .header-bars{
    background-color: rgb(255, 255, 255);
    height: 110px;
    width: 100%;
  }
  .login-create{
    display: flex;
    justify-content: end;
    gap:0.1rem;
  }

  .login-create > a{
    margin: 1rem;
    background-color: #2c3f53;
    color: white;
    font-size: 15px;
    text-align: start;
  }
.mobile-header-menu {
   background-color: black;
display:flex;
position: absolute;
right: 0;
flex-direction: column;

    
}
.mobile-header-menu nav{
 display: flex; 
  justify-content: end;
  
}
.mobile-header-menu ul{
  display: flex;
  flex-direction: column;
  max-width: 10rem;
}
  .hidden{
    display: none;
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
@media (min-width:935px) {//this here will hide the desktop navigation when the device reaches 935px
.menu-container,.header-bars,.mobile-header-menu,.anvil-gaming-logo{
  display: none;
}
}
</style>