import axios from 'axios'

class Auth {
    constructor(){
        const token = localStorage.getItem('token')
        if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
    }
    async login(credencials){
        try{
        const response = await axios.post('http://localhost:8000/api/auth/login',
            credencials
        )
        const token = response.data.access_token
        localStorage.setItem('token',token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        console.log(response)
    }catch(error){
        console.log(error)
    }
    }

    async create(user){
        try{
        const response = await axios.post('http://localhost:8000/api/register',
            user
        )
        console.log(response)
    }catch(error){
        console.log(error)
    }
    }

    isAuthenticated (){
        return !!localStorage.getItem('token')
    }

    logout(){
        localStorage.removeItem('token')
        axios.post('http://localhost:8000/api/auth/logout')
    }

    create(user){
        try{
        const response = axios.post('http://localhost:8000/api/register',
            user
        )
        // const token = response.data.access_token
        // localStorage.setItem('token',token)
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        // console.log(response)
    }catch(error){
        console.log(error)
    }
    }
}

export const authService = new Auth();