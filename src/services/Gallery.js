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
    
    edit(id, gallery) {
        return axios.put(`http://localhost:8000/api/galleries/${id}`,gallery)
    }
    delete(id){
        return axios.delete(`http://localhost:8000/api/galleries/${id}`)
    }

    getByTitle(term) {
        return axios.get(`http://localhost:8000/api/galleries?name=${term}`)
    }
    getUserGalleries(userId, term = '') {
        return axios.get(`http://localhost:8000/api/my-galleries/${userId}?name=${term}`);
    }
}

export const galleryService = new Gallery();