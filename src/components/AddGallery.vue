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
            </div>
        </div>
        <div class="form-group row">
            <div class="offset-4 col-8">
            <button type="submit" class="btn btn-success">Add Gallery</button>
            <button @click="cancle" class="btn btn-success">Cancle</button>
        </div>
        </div>
        </form> 
        <button class="btn btn-dark" @click="addUrl()">+ URL</button>
         <button class="btn btn-dark" v-if="permitedDeleting" @click="deleteUrl(index)">- URL</button>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'


export default {
    data(){
        return{
             gallery:{
                name:'',
                description:'',
                photos:['']  
            },
        }
}, 
computed: {
    permitedDeleting() {
      return this.gallery.photos.length > 1;
    }
  },
    methods:{
        ...mapActions(['createGallery']),

        handleCreate(){
            this.createGallery(this.gallery)
            this.$router.push('/my-galleries')
        },
        
        addUrl() {
            this.gallery.photos.push('');
        },
        deleteUrl(index){
            if(this.permitedDeleting){
            this.gallery.photos.splice(index,1)
            }
        },
        cancle(){
            this.$router.push('/my-galleries')
        }
    },
 
}
</script>

<style>

</style>