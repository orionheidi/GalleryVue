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
     
        </form> 
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import {authService} from '@/services/Auth'

export default {
    data(){
        return{
             user:{
                first_name:'',
                last_name:'',
                password:'',
                password_confirmation:'',
                terms_and_conditions:''
            },
        }
}, 
    computed:{
        ...mapGetters(['errors']),
    },
    methods:{
        ...mapActions(['createUser']),

        handleRegister(){
            this.createUser(this.user) 
            // this.$router.push('/login')
        }       
    },
 
}
</script>

<style>

</style>