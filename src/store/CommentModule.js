import {commentService} from './../services/Comment'

export const CommentModule = {
    state: {
        comments:[],
    },
    getters:{
        comments : state=>state.comments,
    },
    mutations: {
        removeComment(state,comment){
            let index = state.gallery.comments.findIndex(item => item.id === comment.id)
            state.gallery.comments.splice(index,1)
            // state.comments.splice(todo,1)
          },
          addGallery(state,gallery){
            state.galleries.push(gallery)
          },
        // addComments(state,comment){
        //     this.gallery.comments.unshift(comment);
        // }
    },
   actions:{
        async addComments(context,comment){
            const response = await commentService.createComment(comment)
            // context.commit('addComments',response.data)
        },
        async deleteComment(context,comment){
            console.log('prolazim')
            const response = await commentService.delete(comment.id)
            console.log('prosao')
            // context.commit('removeComment',response.data) 
          },
        
   }
  }