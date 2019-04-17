<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link
      class="navbar-brand"
      to="/">
      All Galleries
    </router-link>
    <button class="btn btn-danger" @click="handleLogout" >Logout</button> 
  </nav>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'NavBar',

  methods:{
      ...mapActions(['logout']),

    handleLogout(){
    this.logout()
    this.$router.push('login')
    },
  }
}
</script>
