import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import css from './assets/css/common.css'
import './assets/css/common.css'
import './assets/js/rem'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
