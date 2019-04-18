import Vue from 'vue'
import Vuex from 'vuex'

import {AuthModule} from './AuthModule'
import {GalleryModule} from './GalleryModule'
import {UserModule} from './UserModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    AuthModule,
    GalleryModule,
    UserModule
  }
})