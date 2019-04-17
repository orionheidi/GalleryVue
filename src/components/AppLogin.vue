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
    </form>
</div>

</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    data(){
     return {
            password:'',
            email:''
        }
    },
      computed:{
    ...mapGetters(['errors']),
    },
    methods:{
    ...mapActions(['login']),
    async handleLogin(){
        await this.login({
            email:this.email,
            password:this.password
        })
        if(this.errors){
            alert('Bed credentials.');
            return;
        }
        else if(!this.errors){
             this.$router.push('/')
        }
        }      
    },
        beforeRouteEnter(to,from,next){
        next(komponentaBuducnosti => {
        komponentaBuducnosti.email ='rkuphal@example.net'
    })
        }
}
</script>

<style>
</style>
