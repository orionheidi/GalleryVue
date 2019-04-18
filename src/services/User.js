import axios from 'axios'

class User{

    getAll(){
        return axios.get('http://localhost:8000/api/users')
    }

    get(id){
        return axios.get(`http://localhost:8000/api/users/${id}`)
    }
}

export const userService = new User();