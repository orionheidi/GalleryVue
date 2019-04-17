import {authService} from './../services/Auth'

export const AuthModule = {
    state: {
        users:[],
        user:null,
        errors:[]
    },
    getters:{
        errors: state => state.errors,
    },
    mutations: {
        addUser(state,user){
            state.users.push(user)
          },
        error(state,error){
            state.errors.push(error)
        }
    },
   actions:{
        async login(context,credencials){
            try{
                await authService.login(credencials)
                console.log(credencials)
                console.log('prolazi')
            }catch(error){
                context.commit('error', error) // just taking some guesses here
                // alert('Bad credentials')
                // console.log('greska')
            }
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