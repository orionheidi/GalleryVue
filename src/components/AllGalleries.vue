<template>
  <div>
    <div class="card-body" v-for="gallery in galleries" :key="gallery.id" >
        Title: <router-link  :to="`/galleries/${gallery.id}`">{{gallery.name}}</router-link>
        <br>
        User:  <router-link  :to="`/authors/${gallery.id}`">{{gallery.user_id}}</router-link>
        <br>
        Created at: <h6> {{ gallery.created_at }} </h6>
        <!-- {{ gallery.descriptions }} -->
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
data(){
  return {
   
  }
},
  computed:{
    ...mapGetters(['galleries']),
    user(){
            let gallerySelected = this.galleries.filter(gallery => {return gallery.user_id });
            return gallerySelected;
    }
  },
  methods:{
    ...mapActions(['fatchGalleries']),

   
  },
  created(){
    this.fatchGalleries();
  }

}
</script>

