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
          <img  :src="gallery.photos[0].url">
          <br>
          <br>
          Comments: 
        <div  v-for="(comment,index) in gallery.comments" :key="index">
          Comment number:  <h5 class="card-title"> {{comment.id}}  </h5>
          Comment text: <h5 class="card-title">  {{comment.text}}</h5>
          User: <h5 class="card-title">  {{comment.user.first_name}}</h5>
      </div>
        <br>
      </div>
    </div>
    <!-- <button class="btn btn-dark" @click="loadMore">Load More</button> -->
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  computed:{
    ...mapGetters(['galleries']),
  },
    data() {
    return {
      // galleries: [],
      // currentPage: 0,
      // searchTerm: "",
      // moreGalleries: true
    };
  },
  methods:{
    ...mapActions(['fatchGalleries']), 

    // loadMore() {
    //   this.fatchGalleries();
    // },
  },
    created(){
      // this.currentPage++;
      console.log('galeries finde')
      this.fatchGalleries();
      // this.moreGalleries = this.galleries.length > 0;
    }

}
</script>

