<template>
    <div class="card mb-3" >
    <div class="card-body" >

      <div v-for="gallery in galleries" :key="gallery.id" >
          <h5 class="card-title"> Gallery number:{{gallery.id}}</h5>
        <h5 class="card-title"> Title: <router-link  :to="`/galleries/${gallery.id}`">{{gallery.name}}</router-link> </h5>
        <br>
        <h5 class="card-title"> User:  <router-link  :to="`/authors/${gallery.user.id}`">{{gallery.user.first_name}}</router-link></h5>
        <br>
         <h5 class="card-title">Created at: {{ gallery.created_at }}</h5>
        <div v-for="photo in gallery.photos" :key="photo.id">
          <img :src="photo.url">
          <br>
          <br>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  computed:{
    ...mapGetters(['galleries']),
    // user(){
    //         let gallerySelected = this.galleries.filter(gallery => {return gallery.user_id == this.user });
    //         return gallerySelected;
    // }
  },
  methods:{
    ...mapActions(['fatchMyGalleries']), 
  },
  created(){
    this.fatchMyGalleries();
  }

}
</script>



