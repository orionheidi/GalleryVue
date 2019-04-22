<template>
    <div>
        <br>
        <form @submit.prevent="handleCreate">
         <div class="form-group row">
            <label for="text" class="col-2 col-form-label">Name of Gallery</label>
            <div class="col-8">
            <input type="text" v-model="gallery.name" class="form-control" />
            </div>
        </div>
        <div class="form-group row">
            <label for="text" class="col-2 col-form-label">Description</label>
            <div class="col-8">
            <input type="text" v-model="gallery.description" class="form-control" />
            </div>
        </div>   
        <div class="form-group row" v-for="(photo,index) in gallery.photos" :key="index">
            <label for="text" class="col-2 col-form-label">Photo URL</label>
            <div class="col-8">
            <input type="text" v-model="gallery.photos[index]" class="form-control" />
                 <div v-if="numOfphotos > 1">
            <button class="btn btn-dark" type="button" @click="moveUp(index)">UP</button>
            <button class="btn btn-dark" type="button" @click="moveDown(index)">DOWN</button>
    </div>
            
            </div>
        </div>
    
        <div class="form-group row">
            <div class="offset-4 col-8">
            <button type="submit" class="btn btn-success">Add Gallery</button>
            <button @click="cancle" class="btn btn-success">Cancle</button>
        </div>
        </div>
   
           <div class="alert alert-danger" v-if="errors.length">
            <ul>
                <li v-for="error in errors" :key="error.id">{{ error }}</li>           
            </ul>
        </div> 
        </form> 
           <button class="btn btn-dark" @click="addUrl()">+ URL</button>
         <button class="btn btn-dark" v-if="permitedDeleting" @click="deleteUrl(index)">- URL</button>
         <br>
         <br>
         <!-- <div v-if="numOfphotos > 1">
            <button class="btn btn-dark" type="button" @click="moveUp(index)">UP</button>
            <button class="btn btn-dark" type="button" @click="moveDown(index)">DOWN</button>
    </div> -->
    <br>
    
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import {galleryService} from '@/services/Gallery'

export default {
    data(){
        return{
             gallery:{
                name:'',
                description:'',
                photos:[''], 
            },
            errors: [],
            photosCount:null
        }
}, 
computed: {
    permitedDeleting() {
      return this.gallery.photos.length > 1;
    },
    photosCount() {
      return this.gallery.photos.length;
    },
    numOfphotos: {
      get() {
        return this.gallery.photos.length;
      },
      set(newValue) {
        return this.nevValue;
      }
    }
  },
    methods:{
        ...mapActions(['createGallery','editGallery']),

        async handleCreate(){
            if(this.$route.params.id){
            await this.editGallery({id:this.$route.params.id, gallery: this.gallery})
              this.$router.push({
                name: 'single-gallery',
                params: { id: this.$route.params.id }
            });
            }else{
            await this.createGallery(this.gallery)

            //  this.errors = [];

            // if (!this.gallery.name) {
            // this.errors.push("Gallery Name required.");
            // }
            // if (!this.gallery.description) {
            // this.errors.push("Description required.");
            // }

            // if (!this.errors.length) {
            //     this.$router.push('/create')
            // return true;
            // }
            // this.$router.push('/my-galleries')
            // return;
            // }
            }
        },
        
        addUrl() {
            this.gallery.photos.push('');
             this.numOfphotos++;
        },
        deleteUrl(index){
            if(this.permitedDeleting){
            this.gallery.photos.splice(index,1)
             this.numOfphotos--;
            }
        },
        cancle(){
            this.$router.push('/my-galleries')
        },

    moveUp(index) {
      if (index !== 0) {
        const item = this.gallery.photos.splice(index, 1);
        const to = this.gallery.photos.splice(index - 1, 1);
        const before = this.gallery.photos.splice(0, index - 1);
        const after = this.gallery.photos.splice(0, this.gallery.photos.length);
        this.gallery.photos = [...before, ...item, ...to, ...after];
      }
    },
    moveDown(index) {
      if (index + 1 < this.gallery.photos.length) {
        const item = this.gallery.photos.splice(index, 1);
        const to = this.gallery.photos.splice(index, 1);
        const before = this.gallery.photos.splice(0, index);
        const after = this.gallery.photos.splice(0, this.gallery.photos.length);
        this.gallery.photos = [...before, ...to, ...item, ...after];
      }
    }
    },
       created(){
            galleryService.get(this.$route.params.id)
            console.log(this.$route.params.id)
            this.gallery.id = this.$route.params.id
            console.log(this.gallery.id)
        }
 
}
</script>

<style>

</style>