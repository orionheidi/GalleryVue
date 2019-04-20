<template>
    <div>
        <form @submit.prevent="handleRegister">
         <div class="form-group row">
            <label for="text" class="col-2 col-form-label">First Name</label>
            <div class="col-8">
            <input type="text" v-model="user.first_name" class="form-control" />
            </div>
        </div>
        <div class="form-group row">
            <label for="text" class="col-2 col-form-label">Last Name</label>
            <div class="col-8">
            <input type="text" v-model="user.last_name" class="form-control" />
            </div>
        </div>
        <div class="form-group row">
            <label for="text" class="col-2 col-form-label">Email</label>
            <div class="col-8">
            <input type="text" v-model="user.email" class="form-control" />
            </div>
        </div>
        <div class="form-group row">
            <label for="text" class="col-2 col-form-label">Password</label>
            <div class="col-8">
            <input type="password"  v-model="user.password" class="form-control"/>
            </div>
        </div>
        <div class="form-group row">
            <label for="text" class="col-2 col-form-label">Password Confirmation</label>
            <div class="col-8">
            <input type="password"  v-model="user.password_confirmation" class="form-control"/>
            </div>
        </div>
        <div>
            <input type="checkbox" v-model="user.terms_and_conditions">
            <label for="terms_and_conditions">I agree with all Terms and Conditions</label>
        </div>
        <div class="form-group row">
            <div class="offset-4 col-8">
            <button type="submit" class="btn btn-success">Register</button>
        </div>
        </div>
           <div class="alert alert-danger" v-if="errors.length">
            <ul>
                <li v-for="error in errors" :key="error.id">{{ error }}</li>           
            </ul>
        </div>     
        </form> 
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
import {authService} from '@/services/Auth'

export default {
    data(){
        return{
             user:{
                first_name:'',
                last_name:'',
                email:'',
                password:'',
                password_confirmation:'',
                terms_and_conditions:''
            },
             errors: [],
        }
}, 
    methods:{
        ...mapActions(['createUser']),
   
        async handleRegister(){
           
           await this.createUser(this.user) 

            this.errors = [];

            if (!this.user.first_name) {
            this.errors.push("First Name required.");
            }
            if (!this.user.last_name) {
            this.errors.push("Last Name required.");
            }
            if (!this.user.email) {
            this.errors.push('Email required.');
            } else if (!this.validEmail(this.user.email)) {
            this.errors.push('Valid email required.');
            }
            if (!this.user.password) {
            this.errors.push("Password required.");
            }
            if (!this.user.password_confirmation) {
            this.errors.push("Password confirmed required.");
            }
            if (!this.user.terms_and_conditions) {
            this.errors.push("Tearms and conditions required.");
            }

            if (!this.errors.length) {
                this.$router.push('/login')
            return true;
            }
        //   e.preventDefault();
                    
            },
            validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
            }                
            },              
 
}
</script>

<style>

</style>