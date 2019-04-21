import {galleryService} from './../services/Gallery'

export const GalleryModule = {
    state: {
      galleries:[],
      gallery:{}
    },
    getters:{
        galleries: state => state.galleries,
        gallery: state => state.gallery,
    },
    mutations: {
        setGalleries(state,galleries){
            state.galleries = galleries
        },
        addGallery(state,gallery){
            state.galleries.push(gallery)
          },
        setGallery(state,gallery){
            state.gallery = gallery
        },
        addGalleryPhoto(state,photo){
            state.gallery.photos.push(photo)   
        }
    },
   actions:{
        async fatchGalleries(context){
            const response = await galleryService.getAll()
            console.log(response.data)
            context.commit('setGalleries',response.data)
        },
        async fatchMyGalleries(context){
            const response = await galleryService.getMyGalleries()
            console.log(response.data)
            context.commit('setGalleries',response.data)
        },
        async createGallery(context,gallery){
            const response = await galleryService.create(gallery)
            context.commit('addGallery',response.data)
        },
        async fatchGallery(context,gallery){
            const response = await galleryService.get(gallery.id)
            context.commit('setGallery',response.data)
        },
   }
  }