import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'


import { router } from './router'
import { store } from '@/store/index'

Vue.use(BootstrapVue)


import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')