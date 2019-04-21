<template>
    <div class="mt-4">
    <router-link to="/">Go back</router-link>
    <hr/>
    <div class="card mb-3" >
      
      <div class="card-body">
        Gallery name:<h5 class="card-title"> {{ gallery.name }}</h5>
        Gallery description:<h5 class="card-title"> {{ gallery.description }} </h5>
      </div>
    </div>


     <!-- <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide -for="photo in gallery.photos" :key="photo.id">
        <img
          @click="newTab(photo.url)"
          slot="img"
          class="d-block img-fluid w-100 cursor-pointer"
          :src="photo.url"
          alt="photo slot"
        >
      </b-carousel-slide>
    </b-carousel> -->

           <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active" v-for="photo in gallery.photos" :key="photo.id">
              <img class="d-block w-100"  @click="newTab(photo.url)"  :src="photo.url" alt="First slide" >
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          </div>
     <div  v-for="(comment,index) in gallery.comments" :key="index">
      <div class="card mb-3" >
      
      <div class="card-body">
         User name: <h5 class="card-title">  {{comment.user.first_name}} </h5>  
         Comment text: <h5 class="card-title"> {{comment.text}}</h5>
         Comment created at: <h5 class="card-title"> {{comment.created_at}}</h5>
           <div class="form-group row">
            <div class="offset-4 col-8">
            <button type="submit" @click="OnDelete(comment)" class="btn btn-dark">Delete</button>
            <!-- v-if="userAuth.id == comment.user.id" -->
          </div>
        </div>
        </div>
    </div>
    
      </div>
     <form @submit.prevent="handleCommentAdd">
          <div class="form-group green-border-focus">
            <label>Leave your comment:</label>
            <textarea  v-model="comment.text" class="form-control" rows="3"></textarea>
          </div> 
          <div class="form-group row">
            <div class="offset-4 col-8">
            <button type="submit" class="btn btn-success">Add Comment</button>
        </div>
        </div>
        </form> 
      </div>
    

</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import {galleryService} from '@/services/Gallery'
export default {
    data(){
    return{
      
      comment:{
        text:'',
        // 'user_id':this.authUser.id,
        'gallery_id':this.$route.params.id
      }
    }
    },  
    computed:{
    ...mapGetters(['gallery','authUser']),
     },
    methods:{
    ...mapActions(['fatchGallery','addComments','deleteComment']),

      OnDelete(comment){
      this.deleteComment(comment)
      // this.$router.go()
    },

    newTab(url) {
      var win = window.open(url, '_blank');
      win.focus();
    },
        async handleCommentAdd() {
      try {
  
        
        await this.addComments(this.comment);
        console.log(this.authUser)
        this.gallery.comments.unshift(this.comment);
        // this.errors = {};
        this.comment = "";
      } catch (e) {
        const errorsObject = JSON.parse(e.request.response);
        this.errors = errorsObject.errors;
      }
    },

},
    created(){
    galleryService.get(this.$route.params.id)
    console.log(this.$route.params.id)
    this.gallery.id = this.$route.params.id
    this.fatchGallery(this.gallery)
    },
}
    
</script>


