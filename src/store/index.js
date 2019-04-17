import Vue from 'vue'
import Vuex from 'vuex'

import {AuthModule} from './AuthModule'
import {GalleryModule} from './GalleryModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    AuthModule,
    GalleryModule
  }
})