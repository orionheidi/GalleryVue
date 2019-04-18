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
    setGallery(state,gallery){
        state.gallery = gallery
      },
    },
   actions:{
        async fatchGalleries(context){
        const response = await galleryService.getAll()
        console.log(response.data)
        context.commit('setGalleries',response.data)
    },
    async fatchGallery(context,gallery){
        const response = await galleryService.get(gallery.id)
        context.commit('setGallery',response.data)
    },
   }
  }