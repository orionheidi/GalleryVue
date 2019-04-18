import axios from 'axios'

class Gallery{

    getAll(){
        return axios.get('http://localhost:8000/api/galleries',
        // { params: { user: userId }}
        {params: { count: 10 }}
        )
    }

    get(id){
        return axios.get(`http://localhost:8000/api/galleries/${id}`)
    }
}

export const galleryService = new Gallery();