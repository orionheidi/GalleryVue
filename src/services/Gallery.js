import axios from 'axios'

class Gallery{

    getAll(){
        return axios.get('http://localhost:8000/api/galleries')
    }

    getMyGalleries(){
        return axios.get('http://localhost:8000/api/my-galleries')
    }

    get(id){
        return axios.get(`http://localhost:8000/api/galleries/${id}`)
    }

    create(gallery){
        return axios.post('http://localhost:8000/api/galleries',gallery)
    }
}

export const galleryService = new Gallery();