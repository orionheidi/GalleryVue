import {authService} from './../services/Auth'

export const AuthModule = {
    state: {
        // users:[],
        // user:null,
        errors:[]
    },
    getters:{
        errors: state => state.errors,
    },
    mutations: {
        // addUser(state,user){
        //     state.users.push(user)
        //   },
        error(state,error){
            state.errors.push(error)
        },
        setError(state,error){
            console.log('udjikjahsjkhakhd')
            if(error.response.data.errors.first_name){
                this.errors.push(error.response.data.errors.first_name[0])
            }
            if(error.response.data.errors.last_name){
                this.errors.push(error.response.data.errors.last_name[0])
            }
            if(error.response.data.errors.email){
                this.errors.push(error.response.data.errors.email[0])
            }
            if(error.response.data.errors.password){
                this.errors.push(error.response.data.errors.password[0])
            }
            if(error.response.data.errors.password_confirmation){
                this.errors.push(error.response.data.errors.password_confirmation[0])
            }
            if(error.response.data.errors.terms_and_conditions){
                this.errors.push(error.response.data.errors.terms_and_conditions[0])
            }
        }
    },
   actions:{
        async login(context,credencials){
            // try{
                const response = await authService.login(credencials)
                console.log('prolazi')
            // }catch(error){
            //     context.commit('error', error.response.data) // just taking some guesses here
            // }
      },
        logout(context){
            authService.logout()
      },
        async createUser(context,user){
            try{
        const response = await authService.create(user)
        // context.commit('addUser',response)
            }catch(error){
                // console.log('ovo je error' + error.response.data.message)
                context.commit('error', error.response.data)
                // if(error.response.data.errors.first_name){
                //     this.errors.push(error.response.data.errors.first_name[0])
                // }
                // if(error.response.data.errors.last_name){
                //     this.errors.push(error.response.data.errors.last_name[0])
                // }
                // if(error.response.data.errors.email){
                //     this.errors.push(error.response.data.errors.email[0])
                // }
                // if(error.response.data.errors.password){
                //     this.errors.push(error.response.data.errors.password[0])
                // }
                // if(error.response.data.errors.password_confirmation){
                //     this.errors.push(error.response.data.errors.password_confirmation[0])
                // }
                // if(error.response.data.errors.terms_and_conditions){
                //     this.errors.push(error.response.data.errors.terms_and_conditions[0])
                // }
            }
        }
    }
    }
 