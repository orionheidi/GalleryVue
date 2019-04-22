<template>
    <div class="card mb-3" >
    <div class="card-body" >
     <div class="row">
      <div class="col-md-12">
        <search-form @search-submitted="handleSearch"></search-form>
      </div>
    </div>
    <div class="row" v-if="galleries.length">
      <div v-for="gallery in paginatedGalleries" :key="gallery.id" >
          <h5 class="card-title"> Gallery number:{{gallery.id}}</h5>
        <h5 class="card-title"> Title: <router-link  :to="`/galleries/${gallery.id}`">{{gallery.name}}</router-link> </h5>
        <br>
        <h5 class="card-title"> Author:  <router-link  :to="`/authors/${gallery.user.id}`">{{gallery.user.first_name}} {{gallery.user.last_name}}</router-link></h5>
        <br>
         <h5 class="card-title">Created at: {{ gallery.created_at }}</h5>
          <img  :src="gallery.photos[0].url">
          <br>
          <br>
        <br>
      </div>
    </div>
    </div>
     <!-- <div v-else class="row">
      <div class="col-md-12"></div>
      <h5>Upps, there is no galleries.</h5>
    </div> -->
      <div class="card-body" v-if="hasMoreGalleries">
      <button class="btn btn-dark mb-2 ml-50" @click="showMore">Load more</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import SearchForm from './SearchForm.vue';

export default {
   components: {
    SearchForm
  },
  computed:{
    ...mapGetters(['galleries','searchTerm','paginatedGalleries']),
      hasMoreGalleries() {
        console.log(this.paginatedGalleries.length)
      return this.galleries.length > this.paginatedGalleries.length ? true : false
    }
  },
  methods:{
    ...mapActions(['fatchGalleries','filterGalleries', 'paginateGalleries','paginationShowMore']),
     async getGalleries() {
      if (!this.$route.query.name) {
        await this.fatchGalleries();
        return;
      }
      await this.filterGalleries(this.$route.query.name);
    },
     async handleSearch(term) {
       console.log("?")
      this.$router.push({name: '/', query: { name: term }})
      await this.filterGalleries(term);
    },
    showMore() {
      console.log('ulazis?')
      const currentLength = this.paginatedGalleries.length;
      console.log(this.paginatedGalleries.length)
      const galleriesNew = this.galleries.slice(currentLength, currentLength+10)
      this.paginationShowMore(galleriesNew);
    }
  },
  watch: {
    searchTerm() {
       this.filterGalleries(this.searchTerm)
    }
  },
    created(){
      console.log('galeries finde')
      this.getGalleries();
      console.log('gerovane')
    }

}
</script>

