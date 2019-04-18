<template>
    <div>
        <br>
             <div class="alert alert-danger" v-if="errors.length > 0">
                <ul>
                    <li v-for="error in errors" :key="error.id">
                        Invalid data {{ error }}
                    </li>
                </ul>
            </div>
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
        <div class="form-group row">
            <label for="text" class="col-2 col-form-label">Email</label>
            <div class="col-8">
            <input type="text" v-model="user.email" class="form-control" />
            </div>
        </div>
       
     
        </form> 
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
                photos:{}
            },
        }
}, 
    computed:{
        ...mapGetters(['errors']),
    },
    methods:{
        ...mapActions(['createGallery']),

        handleCreate(){
            this.createGallery(this.gallery) 
            // this.$router.push('/login')
        }       
    },
 
}
</script>

<style>

</style>