import axios from 'axios'

class Comment{

    createComment(comment) {
        return axios.post(`http://localhost:8000/api/comments`, comment)
      }
    
    delete(id){
        return axios.delete(`http://localhost:8000/api/comments/${id}`)
    }
}

export const commentService = new Comment();