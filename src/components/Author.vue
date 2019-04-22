<template>
    <div class="mt-4 ml-5">
    <router-link to="/">Go back</router-link>
    <hr/>
    <div class="card mb-3" style="width: 20rem;">
      <div class="card-body">
          Autor name: <h5 class="card-title">{{ user.first_name }} {{ user.last_name }}</h5>
          <div v-for="gallery in user.galleries" :key="gallery.id">
            Gallery id: <p class="card-title">{{ gallery.id }}</p>
            Gallery name: <h5 class="card-title"><router-link  :to="`/galleries/${gallery.id}`">{{ gallery.name }}</router-link></h5>
             <p class="card-title">Created at: <br>{{ gallery.created_at }}</p>
          <img  :src="gallery.photos[0].url" height="200px">
          <div  v-for="(comment,index) in gallery.comments" :key="index">
         Comment: <h5 class="card-title">  {{comment.id}}      {{comment.text}}</h5>
        </div>
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
    ...mapGetters(['user','galleries']),
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
