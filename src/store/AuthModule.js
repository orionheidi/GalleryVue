import {authService} from './../services/Auth'

export const AuthModule = {
    state: {
    },
    mutations: {
       
    },
   actions:{
        async login(context,credencials){
            await authService.login(credencials)
      },
        logout(context){
            authService.logout()
      }
   }
  }