import {authService} from './../services/Auth'

export const AuthModule = {
    state: {
        users:[],
        user:null
    },
    mutations: {
        addUser(state,user){
            state.users.push(user)
          }
    },
   actions:{
        async login(context,credencials){
            await authService.login(credencials)
      },
        logout(context){
            authService.logout()
      },
        async createUser(context,user){
        const response = await authService.create(user)
        context.commit('addUser',response)
        console.log(response)
    }
   }
  }