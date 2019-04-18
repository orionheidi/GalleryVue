import Vue from 'vue'
import VueRouter from 'vue-router'

import AllGalleries from './components/AllGalleries.vue'
import MyGalleries from './components/MyGalleries.vue'
import AppLogin from '@/components/AppLogin'
import AppRegister from '@/components/AppRegister'
import Author from '@/components/Author'
import SingleGallery from '@/components/SingleGallery'
import AddGallery from '@/components/AddGallery'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: AllGalleries,
      meta:{ requestAuth:true}
      },
    //   { path: '/my-galleries/:id', component: MyGalleries, name: 'my-galleries',
    //   meta:{ requestAuth:true}
    //  },
      { path: '/login', component:AppLogin,meta:{ requestAuth:true} },
      { path: '/register', component:AppRegister  },
      { path: '/galleries/:id', component: SingleGallery, name: 'single-gallery',
      meta:{ requestAuth:true}
     },

     { path: '/authors/:id', component: Author, name: 'author',
     meta:{ requestAuth:true}
    },
    { path: '/create', component: AddGallery,
    meta:{ requestAuth:true}
    },
    ] 
  })

  router.beforeEach((to,form,next)=>{
    if(to.meta.requiresAuth && !authService.isAuthenticated){
      next('/login')
    }else{
      next()
    }
  })