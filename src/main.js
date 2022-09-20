import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import TabBar from './components/TabBar'
import ProductList from './components/ProductList'
import Tags from './components/Tags'

import './utils/rem'

import './assets/css/reset.css'
import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(api)
Vue.component('TabBar', TabBar)
Vue.component('ProductList', ProductList)
Vue.component('Tags', Tags)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
