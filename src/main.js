// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import $ from 'jquery'

import './assets/js/flexible'
import  './assets/js/validate'
import './mock'
import  './assets/js/swiper.min'
import 'js-base64'


import './assets/css/swiper.min.css'
import './assets/css/common.css'
import './assets/css/font.css'



Vue.use(VueAwesomeSwiper);
Vue.prototype.HOST = 'http://192.168.1.151:8099/MarketAPI';
Vue.prototype.$axios = axios;
Vue.prototype.$axios.defaults.withCredentials=true; 
Vue.config.productionTip = false;

var qs=require('qs');
var instance = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});

/* eslint-disable no-new */

//价格小数点保留2位过滤器
Vue.filter('keepTwoNum',function(value){
	value = new Number(value);
    return value.toFixed(2)
});

//返回历史页面
Vue.prototype.$setgoindex = function () {
  if (window.history.length <= 1) {
    if (location.href.indexOf('?') === -1) {
      window.location.href = location.href + '?goindex=true'
    } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') === -1) {
      window.location.href = location.href + '&goindex=true'
    }
  }
  if (this.$route.query.goindex === 'true') {
  this.$router.push('/')
} else {
  this.$router.back(-1)
}
};

//飞入购物车
 $.extend($.easing, {
        easeOutExpo: function(x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -1 * t / d) + 1) + b;
        }
    });
Vue.prototype.$addCart = function(item,index){
    if($('.icon_add_cart').eq(index).hasClass('no_icon')){
           alert("此商品无库存！")
           return false;
    }
    let elem = $('.icon_add_cart').eq(index),
        elemOffset = elem.offset(),
        iconX = elemOffset.left,
        iconY = elemOffset.top;

    let elemBox = elem.parents(".item"),
        itemImg = elemBox.find('img').prop('src'),
        pid = elemBox.prop('id'),
        ptitle = elemBox.find('.info').text(),
        country = elemBox.find('.i_country span').text(),
        price = elemBox.find('.i_price span').text();


    let footerIcon = $("#cart"),
        footerIconOffset = footerIcon.offset(),
         footerCartX = footerIconOffset.left,
         footerCartY = footerIconOffset.top; 

    let user = localStorage.getItem('token'),
        Base64 = require('js-base64').Base64;      

       Vue.prototype.$axios.post('/api/user',{'user':user}).then(res=>{
                res.data.data.forEach((item,index)=>{
                    if(item.mobile===Base64.decode(user)){
                       let arr = {
                             "pid":pid,
                             "pimg":itemImg,
                             "ptitle":ptitle,
                             "price":price,
                             "country":country,
                             "count":1
                       };
                         item.cartList.push(arr);
                         item.cartNum ++ ;
                    }
                })
              });

        let html = '<img class="flyImg" src="'+itemImg+'"/>';
          $('body').append(html);
            $(".flyImg").css({
              "position": "absolute",
              "left":iconX,
              "top":iconY,
              "zIndex":999,
              "width": 0.533333+"rem",
              "height": 0.533333+"rem",
            });
            $(".flyImg").animate({
               'left':footerCartX,
               'top':footerCartY+200,
               'width':5,
               'height':5,
               'opacity':0.5
            },'easeOutExpo',function(){
                 $(this).remove()
            })   

  
           
    },    


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});


