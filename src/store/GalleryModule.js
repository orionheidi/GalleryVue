import {galleryService} from './../services/Gallery'

export const GalleryModule = {
    state: {
      galleries:[],
      gallery:{},
      paginatedGalleries: {},
      searchTerm: ''
    },
    getters:{
        galleries: state => state.galleries,
        gallery: state => state.gallery,
        paginatedGalleries: state => state.paginatedGalleries,
        searchTerm: state => state.searchTerm,
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
        PAGINATE_GALLERIES(state) {
            state.paginatedGalleries = state.galleries.slice(0,10);
        },
        APPEND_TO_PAGINATION(state,galleries) {
            state.paginatedGalleries = [...state.paginatedGalleries, ...galleries];
        },
        SET_SEARCH_TERM(state, term){
            state.searchTerm = term;
        },
        REMOVE_DELETED_GALLERY(state, id) {
            state.paginatedGalleries = state.paginatedGalleries.
            filter(gallery=>gallery.id !== id);
            state.galleries = state.galleries.
            filter(gallery=>gallery.id !== id);

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
        async editGallery(context,{id,gallery}){
            const response = await galleryService.edit(id,gallery)
            // context.commit('updateGallery',response.data)
        },
        async deleteGallery(context,gallery){
            const response = await galleryService.delete(gallery.id)
            context.commit('removeGallery',response.data) 
          },
        async filterGalleries( { commit }, term) {
            const { data } = await galleryService.getByTitle(term);
            commit('GET_GALLERIES', data);
            commit('PAGINATE_GALLERIES');
        },
        paginationShowMore({commit}, galleries) {
            commit('APPEND_TO_PAGINATION', galleries);
        },
        async getUserGalleries({commit}, userId) {
            const { data } = await galleryService.getUserGalleries(userId);
            commit('GET_GALLERIES', data);
            commit('PAGINATE_GALLERIES');
        },
        async filterUserGalleries({commit}, {userId, term}) {
            const { data } = await galleryService.getUserGalleries(userId, term);
            commit('GET_GALLERIES', data);
            commit('PAGINATE_GALLERIES');
        },
        setGallerySearchTerm({commit}, term) {
            commit('SET_SEARCH_TERM', term)
        },
        resetGallerySearchTerm({commit}) {
            commit('SET_SEARCH_TERM', '')
        }
    }
   }
