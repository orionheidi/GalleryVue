<template>
    <div class="mt-4">
    <router-link to="/">Go back</router-link>
    <hr/>
    <div class="card mb-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ user.first_name }}</h5>
        <h5 class="card-title">{{ user.last_name }}</h5>
        <div v-for="gallery in user.gallery" :key="gallery.id">
          <h5 class="card-title">{{ gallery.name }}</h5>
          <img :src="gallery.photos.url">
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {userService} from '@/services/User'
export default {
         
    computed:{
    ...mapGetters(['user']),
     },
    methods:{
    ...mapActions(['fatchUser']),
      },
    created(){
    userService.get(this.$route.params.id)
    console.log(this.$route.params.id)
    this.user.id = this.$route.params.id
    this.fatchUser(this.user)
    }
}
</script>

<style>

</style>
