import axios from 'axios'

class Gallery{

    getAll(){
        return axios.get('http://localhost:8000/api/galleries',
        // { params: { user: userId }}
        {params: { count: 10 }}
        )
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

    addPhotos (gallery,photo) {
        return httpService.post(`/galleries/${gallery.id}/photos`,photo)
      }
}

export const galleryService = new Gallery();