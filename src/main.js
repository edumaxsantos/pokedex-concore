import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
//import './../node_modules/bulma/css/bulma.css'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
