<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link 
      class="navbar-brand"
      to="/">
      All Galleries
    </router-link>
    <router-link
      class="navbar-brand"
      to="/my-galleries">
      My Galleries
    </router-link> 
     <!-- <router-link
      class="navbar-brand"
      to="/create">
      Add Gallery
    </router-link> -->
    <div  v-if="IsItLogin">
          <router-link class="navbar-brand" to="/login">Login</router-link>
    </div>
     <div  v-if="IsItLogin">
          <router-link class="navbar-brand"  to="/register">Register</router-link>
    </div>
     <!-- <button class="btn btn-dark" @click="login">Login</button> 
    <button class="btn btn-dark" @click="register">Register</button>  -->
     <div  v-if="IsItLogin">
          <router-link class="navbar-brand" to="/login" @click="handleLogout">Logout</router-link>
    </div>
    <!-- <button class="btn btn-dark" @click="handleLogout" >Logout</button>  -->
  </nav>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import AppRegister from '@/components/AppRegister'
import AppLogin from '@/components/AppLogin'
export default {
  name: 'NavBar',
  components:{
    AppRegister,
    AppLogin
  },

  computed:{
    ...mapGetters(['IsItLogin']),
  },

  methods:{
      ...mapActions(['logout']),

    handleLogout(){
    this.logout()
    this.$router.push('login')
    this. IsItLogin = false;
    },
  }
}
</script>
