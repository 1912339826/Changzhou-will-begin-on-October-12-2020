// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import api from '../src/api/api2'
import req from '../src/api/req'
// normalize.css（css样式初始化）
import 'normalize.css/normalize.css'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.prototype.axios = axios;

Vue.config.productionTip = false
Vue.prototype.$req = req
window.api = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
