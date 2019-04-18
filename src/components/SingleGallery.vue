<template>
    <div class="mt-4">
    <router-link to="/">Go back</router-link>
    <hr/>
    <div class="card mb-3" >
      <div class="card-body">
        <h5 class="card-title">{{ gallery.name }}</h5>
           <h5 class="card-title"> {{ gallery.description }} </h5>
          <div v-for="photo in gallery.photos" :key="photo.id" id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" :src="photo.url" alt="First slide">
            </div>
          </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
</div>
    </div>
    </div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {galleryService} from '@/services/Gallery'
export default {
         
    computed:{
    ...mapGetters(['gallery']),
     },
    methods:{
    ...mapActions(['fatchGallery']),
      },
    created(){
    galleryService.get(this.$route.params.id)
    console.log(this.$route.params.id)
    this.gallery.id = this.$route.params.id
    this.fatchGallery(this.gallery)
    }
}
</script>

<style>

</style>
