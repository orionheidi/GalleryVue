import Vue from 'vue'
import VueRouter from 'vue-router'

import AllGalleries from './components/AllGalleries.vue'
import AppLogin from '@/components/AppLogin'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: AllGalleries,
      meta:{ requestAuth:true}
      },
      { path: '/login', component:AppLogin,meta:{ requestAuth:true} },
    ] 
  })

  router.beforeEach((to,form,next)=>{
    if(to.meta.requiresAuth && !authService.isAuthenticated){
      next('/login')
    }else{
      next()
    }
  })