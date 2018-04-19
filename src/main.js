// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/js/flexible'
import  './assets/js/validate'
import './mock'
import  './assets/js/swiper.min'
import 'js-base64'

import './assets/css/swiper.min.css'
import './assets/css/common.css'
import './assets/css/font.css'
Vue.use(VueAwesomeSwiper);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

//定义全局变量
// Vue.prototype.$post=post;
// Vue.prototype.$fetch=fetch;
// Vue.prototype.$patch=patch;
// Vue.prototype.$put=put;

/* eslint-disable no-new */

//价格小数点保留2位过滤器
Vue.filter('keepTwoNum',function(value){
	value = new Number(value);
    return value.toFixed(2)
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});


