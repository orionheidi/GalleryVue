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
        const response = await axios.post('http://localhost:8000/api/auth/register',
            user
        )
        console.log(response)
    }

    isAuthenticated (){
        return !!localStorage.getItem('token')
    }

    logout(){
        localStorage.removeItem('token')
        axios.post('http://localhost:8000/api/auth/logout')
    }
}


export const authService = new Auth();