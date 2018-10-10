import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'

import store from './store'

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
