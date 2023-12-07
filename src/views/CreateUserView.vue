<template>
  <div class="creat-user">
    <h2>Create User</h2>
<CreateUser/>
  </div>
</template>
<script>
import CreateUser from '@/components/Forms/CreateUser.vue'


export default{
  components:{
   CreateUser
  }
}

</script>
<style scoped>
h2{
  color: white;
}
</style>