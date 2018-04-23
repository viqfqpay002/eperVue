import Vue from 'vue'
import Router from 'vue-router'
import login  from '@/components/login'
import register from '@/components/register'
import index from '@/components/index'
import caterigres from '@/components/caterigres'
import cart from '@/components/cart'
import eperclub from '@/components/eperclub'
import userCenter from '@/components/usercenter/usercenter'
import settings from '@/components/usercenter/settings'
import integral from '@/components/integral/integralList'
// import ins from '@/components/test'
import details from '@/components/products/goodsdetails'
import classily from '@/components/products/classifylist'

Vue.use(Router);

export default new Router({
  routes: [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path:'/login',
    name:'login',
    component: login
  },{
    path:'/register',
    name:'register',
    component: register
  }
  ,{
    path:'/caterigres',
    name:'caterigres',
    component:caterigres,
  },
  {
   path:'/cart',
   name:'cart',
   component: cart
 },{
  path:'/eperclub',
  name:'eperclub',
  component: eperclub
},{
  path:'/usercenter',
  name:'userCenter',
  component: userCenter,
},{
  path:'/usercenter/settings',
  name:'settings',
  component:settings
},{
  path:'/integralList',
  name:'integralList',
  component:integral
},{
  path:"/details/:id",
  name:'detail',
  component:details 
},{
  path:"/classily?:id",
  name:"classily",
  component:classily
}
]
})
