<template>
  <div class="best">
    <h2>Login</h2>
  <LoginForm/>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import LoginForm from '../components/Forms/LoginForm.vue'
export default defineComponent({
  components:{
    LoginForm
  }
})

</script>
<style scoped>
h2{
  color: white;
}
</style>