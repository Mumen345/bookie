
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toasted from 'vue-toasted';


Vue.config.productionTip = false
var VueScrollTo = require('vue-scrollto');

Vue.use(Toasted)
Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
