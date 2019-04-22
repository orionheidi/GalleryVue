<template>
  <form @submit.prevent="handleSubmit">
    <div class="input-group search-field md-form form-sm form-2 pl-0">
      <input
        class="form-control my-0 py-1 red-border"
        type="text"
        placeholder="Search"
        aria-label="Search"
        v-model="searchTerm"
      >
      <div class="input-group-append search-button" @click="handleSubmit">
        <span class="input-group-text red lighten-3" id="basic-text1">
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>
  </form>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'search-form',
  data() {
    return {
      searchTerm: this.$route.query.name
    };
  },
  methods: {
      ...mapActions(['resetGallerySearchTerm', 'setGallerySearchTerm']),
      handleSubmit() {
        if(!this.searchTerm) {
          this.resetGallerySearchTerm();
          this.$router.push({query:{}});
          return;
        }
        this.$router.push({query: {name: this.searchTerm}});
        this.setGallerySearchTerm(this.searchTerm);
      }
  },
  watch: {
    '$route.query.title'() {
      if(!this.$route.query.name) {
        this.searchTerm = '';
        this.resetGallerySearchTerm();
      }
    }
  }
}
</script>
<style scoped>
/* .search-field {
  width: 300px;
  float: right;
} */
.search-button {
  cursor: pointer;
}
</style>