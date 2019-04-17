<template>
    <div class="mt-4">
    <router-link to="/todos">Go back</router-link>
    <hr/>
    <div class="card mb-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ gallery.name }}</h5>
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
