<template>
  <div>
    <div class="card-body" v-for="gallery in galleries" :key="gallery.id" >
        Title: <router-link  :to="`/galleries/${gallery.id}`">{{gallery.name}}</router-link>
        <br>
        User:  <router-link  :to="`/authors/${gallery.user.id}`">{{gallery.user.first_name}}</router-link>
        <br>
        Created at: <h6> {{ gallery.created_at }} </h6>
        <div v-for="photo in gallery.photos" :key="photo.id">
          <img :src="photo.url">
        </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  computed:{
    ...mapGetters(['galleries']),
  },
  methods:{
    ...mapActions(['fatchGalleries']), 
  },
  created(){
    this.fatchGalleries();
  }

}
</script>

