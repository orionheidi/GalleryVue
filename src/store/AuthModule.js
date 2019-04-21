import {authService} from './../services/Auth'

export const AuthModule = {
    state: {
        IsToken: authService.isAuthenticated(),
        authUser: {},
    },
    getters:{
        IsItLogin: state => state.IsToken,
        authUser: state => state.authUser
    },
    mutations: {
        SET_DATA(state,{IsToken}){
            state.IsToken = IsToken
        },
        SET_AUTH_USER(state, data) {
            state.authUser = data;
        }
    },
   actions:{
        async login(context,credencials){
                const response = await authService.login(credencials) 
                context.commit('SET_DATA',{IsToken: authService.isAuthenticated()})         
      },
        logout(context){
            authService.logout()
            context.commit('SET_DATA',{IsToken:false})  
      },
        async createUser(context,user){
        const response = await authService.create(user)
        },
        async getAuthUser({ commit }) {
            return new Promise(async (resolve, reject) => {
                try {
                    const { data } = await authService.getAuthUser();
                    commit('SET_AUTH_USER', data);
                    resolve('success');
                } catch (e) {
                    reject(e);
                }
            })
        },
        getUser({ commit }, id) {
            return authService.getUser(id);
        }
    },
    }
 