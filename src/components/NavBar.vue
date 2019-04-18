<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link 
      class="navbar-brand"
      to="/">
      All Galleries
    </router-link>
     <!-- <router-link
      class="navbar-brand"
      to="`/my-galleries/:id`">
      My Galleries
    </router-link> -->
     <!-- <router-link
      class="navbar-brand"
      to="/create">
      Add Gallery
    </router-link> -->
    <button class="btn btn-dark" @click="login">Login</button> 
    <button class="btn btn-dark" @click="register">Register</button> 
    <button class="btn btn-dark" @click="handleLogout" >Logout</button> 
  </nav>
</template>

<script>
import {mapActions} from 'vuex';
import AppRegister from '@/components/AppRegister'
import AppLogin from '@/components/AppLogin'
export default {
  name: 'NavBar',
  components:{
    AppRegister,
    AppLogin
  },

  methods:{
      ...mapActions(['logout']),

    handleLogout(){
    this.logout()
    this.$router.push('login')
    },
    register(){
    this.$router.push('register')
    },
    login(){
    this.$router.push('login')
    },
  }
}
</script>
