<template>
<div class="anvil-gaming-logo">
<div class="mobile-menu-icon">
      <font-awesome-icon
        class="bars"
        :icon="['fas', 'bars']"
        @click="toggleMobileMenu"
      />
<img>
</div>
</div>
    <header class="mobile-header-menu">
          <nav>
            <ul>
                <div class="login-create">
                <router-link to='/login'>Login</router-link>
                <router-link to='/creat_user'>create User</router-link>
                </div>
                <router-link to="/">Home</router-link>
                <router-link to="/trending_games">Trending</router-link>
                <router-link to="/best_games">Best Games</router-link>
                <router-link to="/new_games">New Games</router-link>
            </ul>
          </nav>
    </header>
</template>

<script>

export default{
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
  },
}
</script>




<style lang='scss' scoped>
    .mobile-menu-icon {
        color:rgb(200, 15, 15);
        font-size: 5rem;
        display: flex;
        justify-content: end;
        gap: 5rem;
      
        
       
    }
  .anvil-gaming-logo{
    background-image:url('../../assets/anvil games logo-2.jpg');
    background-repeat: no-repeat;
    background-position:left;
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
    font-size: 25px;
  }
.mobile-header-menu {
   background-color: black;
display:flex;
flex-direction: column;
    
}
.mobile-header-menu nav{

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
@media (min-width: 935px) {//this here will hide the desktop navigation when the device reaches 935px
 .anvil-gaming-logo {display: none;}//temporary
.mobile-header-menu{display: none;}//temporary
}
</style>