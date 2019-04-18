import {userService} from './../services/User'

export const UserModule = {
    state: {
      users:[],
      user:{}
    },
    getters:{
        users: state => state.users,
        user: state => state.user,
    },
    mutations: {
        setUsers(state,users){
            state.users = users
    },
    setUser(state,user){
        state.user = user
      },
    },
    actions:{
    async fatchUser(context,user){
        const response = await userService.get(user.id)
        context.commit('setUser',response.data)
    },
        async fatchUsers(context){
        const response = await userService.getAll()
        console.log(response)
        context.commit('setUsers',response.data)
    },
  
   }
  }