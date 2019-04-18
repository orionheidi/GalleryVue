import axios from 'axios'

class Auth {
    constructor(){
        const token = localStorage.getItem('token')
        if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
    }
    async login(credencials){
     
        const response = await axios.post('http://localhost:8000/api/auth/login',
            credencials
        )
        const token = response.data.access_token
        localStorage.setItem('token',token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        // this.$router.push('/')
        console.log('jel prolazis?')
        console.log(response)

    }

    async create(user){
        // try{
        const response = await axios.post('http://localhost:8000/api/register',
            user
        )
        console.log(response)
    // }catch(error){
            // if(error.response.data.errors.first_name){
            //         this.errors.push(error.response.data.errors.first_name[0])
            //     }
            //     if(error.response.data.errors.last_name){
            //         this.errors.push(error.response.data.errors.last_name[0])
            //     }
            //     if(error.response.data.errors.email){
            //         this.errors.push(error.response.data.errors.email[0])
            //     }
            //     if(error.response.data.errors.password){
            //         this.errors.push(error.response.data.errors.password[0])
            //     }
            //     if(error.response.data.errors.password_confirmation){
            //         this.errors.push(error.response.data.errors.password_confirmation[0])
            //     }
            //     if(error.response.data.errors.terms_and_conditions){
            //         this.errors.push(error.response.data.errors.terms_and_conditions[0])
            //     }
    // }
    }

    isAuthenticated (){
        return !!localStorage.getItem('token')
    }

    logout(){
        localStorage.removeItem('token')
        axios.post('http://localhost:8000/api/auth/logout')
    }

    create(user){
    
        const response = axios.post('http://localhost:8000/api/register',
            user
        )
        // const token = response.data.access_token
        // localStorage.setItem('token',token)
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        // console.log(response)
    // }catch(error){
    //     console.log('ovo je error')
    //     console.log(error)
        // if(error.response.data.errors.first_name){
        //     this.errors.push(error.response.data.errors.first_name[0])
        // }
        // if(error.response.data.errors.last_name){
        //     this.errors.push(error.response.data.errors.last_name[0])
        // }
        // if(error.response.data.errors.email){
        //     this.errors.push(error.response.data.errors.email[0])
        // }
        // if(error.response.data.errors.password){
        //     this.errors.push(error.response.data.errors.password[0])
        // }
        // if(error.response.data.errors.password_confirmation){
        //     this.errors.push(error.response.data.errors.password_confirmation[0])
        // }
        // if(error.response.data.errors.terms_and_conditions){
        //     this.errors.push(error.response.data.errors.terms_and_conditions[0])
        // }
        
    }
    }
// }

export const authService = new Auth();