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
        // updateGallery(state,gallery){
        //     state.galleries.splice(gallery.id, 1, gallery);
        // },
        setGallery(state,gallery){
            state.gallery = gallery
        },
        removeGallery(state,gallery){
            let index = state.galleries.findIndex(item => item.id === gallery.id)
            state.galleries.splice(index,1)
          },
        
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
        async editGallery(context,{id,gallery}){
            const response = await galleryService.edit(id,gallery)
            // context.commit('updateGallery',response.data)
        },
        async deleteGallery(context,gallery){
            const response = await galleryService.delete(gallery.id)
            context.commit('removeGallery',response.data) 
          },
   }
  }