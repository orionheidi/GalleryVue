<template>
<div>
    <br>
    <form @submit.prevent="handleLogin">
    <!-- <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
        <li v-for="error in errors" :key="error"> {{ error }}</li>
        </ul>
    </p> -->
     <div class="form-group row">
        <label for="text" class="col-1 col-form-label">Email</label>
        <div class="col-8">
        <input name="email" type="text" v-model="email" class="form-control" />
        </div>
    </div>
    <div class="form-group row">
        <label for="text" class="col-1 col-form-label">Password</label>
        <div class="col-8">
        <input name="password" type="password"  v-model="password" class="form-control"/>
        </div>
    </div>
    <div class="form-group row">
        <div class="offset-4 col-8">
        <button type="submit" class="btn btn-success">Login</button>
        </div>
    </div>
    <div class="alert alert-danger" v-if="error">
            <ul>
                <!-- <li v-for="error in errors" :key="error.id"> -->
                    Bad credentials {{ error }}
                <!-- </li> -->
            </ul>
        </div>
    </form>
</div>

</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    data(){
     return {
            password:'',
            email:'',
            error:''
        }
    },
    //   computed:{
    // ...mapGetters(['errors']),
    // },
    methods:{
    ...mapActions(['login']),
    async handleLogin(){
     try{
        await this.login({
            email:this.email,
            password:this.password
        })

            this.$router.push('/')
        
     }catch(e){
         const error = JSON.parse(e.request.response)
         this.error = error.error
     }

        },    
    },
        beforeRouteEnter(to,from,next){
        next(komponentaBuducnosti => {
        komponentaBuducnosti.email ='virgie95@example.net'
    })
        }
}
</script>

<style>
</style>
