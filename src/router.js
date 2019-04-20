import Vue from 'vue'
import VueRouter from 'vue-router'

import AllGalleries from './components/AllGalleries.vue'
import MyGalleries from './components/MyGalleries.vue'
import AppLogin from '@/components/AppLogin'
import AppRegister from '@/components/AppRegister'
import Author from '@/components/Author'
import SingleGallery from '@/components/SingleGallery'
import AddGallery from '@/components/AddGallery'
import { authService } from './services/Auth';

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: AllGalleries },
      { path: '/my-galleries', component: MyGalleries, name: 'my-galleries',
      meta:{ requiresAuth:true}
     },
      { path: '/login', component:AppLogin },
      { path: '/register', component:AppRegister},
      { path: '/galleries/:id', component: SingleGallery, name: 'single-gallery'
     },

     { path: '/authors/:id', component: Author, name: 'author'
    },
    { path: '/create', component: AddGallery,
    meta:{ requiresAuth:true}
    },
    ] 
  })

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!authService.isAuthenticated()) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()!
    }
  })