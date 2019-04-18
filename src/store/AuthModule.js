import {authService} from './../services/Auth'

export const AuthModule = {
    state: {
        IsItLogin: localStorage.getItem("token") || null
        // errors:[]
    },
    getters:{
        IsItLogin: state => state.token !== null,
    },
    mutations: {
        // error(state,error){
        //     state.errors.push(error)
        // },
    },
   actions:{
        async login(context,credencials){
                const response = await authService.login(credencials)          
      },
        logout(context){
            authService.logout()
      },
        async createUser(context,user){
        const response = await authService.create(user)
        }
    }
    }
 