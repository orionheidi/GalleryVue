import {commentService} from './../services/Comment'

export const CommentModule = {
    state: {
        comments:[]
    },
    getters:{
        comments : state=>state.comments
    },
    mutations: {
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
            const response = await commentService.delete(comment.id)
            // context.commit('removeComment',response.data) 
          },
        
   }
  }