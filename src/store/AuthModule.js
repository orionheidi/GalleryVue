import {authService} from './../services/Auth'

export const AuthModule = {
    state: {
        IsToken: authService.isAuthenticated()
        // errors:[]
    },
    getters:{
        IsItLogin: state => state.IsToken
    },
    mutations: {
        SET_DATA(state,{IsToken}){
            state.IsToken = IsToken
        },
    },
   actions:{
        async login(context,credencials){
                const response = await authService.login(credencials) 
                context.commit('SET_DATA',{IsToken: authService.isAuthenticated()})         
      },
        logout(context){
            console.log('loguj out')
            authService.logout()
            context.commit('SET_DATA',{IsToken:false})  
      },
        async createUser(context,user){
        const response = await authService.create(user)
        }
    }
    }
 