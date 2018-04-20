<template>
  <div id="app">
    <div v-show="flag" class="loading flex midcenter"><p>{{loading}}</p></div>
      <transition name="component-fade" mode="out-in">
         <router-view v-if="isRouterAlive"></router-view>
       </transition>
    <footer class="footer" id="footer" v-show="footerShow">
      <ul class="footer_ul flex midcenter rowflex">
        <li class="item ">
          <router-link to="/" :class='{isActive:routeName=="index"}'>
            <span class="icon iconfont icon-home"></span>
            <p class="title">Home</p>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/caterigres" :class='{isActive:routeName=="caterigres"}'>
            <span class="icon iconfont icon-menu"></span>
            <p class="title">Categories</p>
          </router-link>
        </li>
        <li class="item cart">
          <router-link to="/cart" :class='{isActive:routeName=="cart"}'>
            <span class="icon iconfont icon-gouwuche"></span>
            <p class="title">Cart</p>
            <span class="cart_conunt">{{cartNum}}</span>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/eperclub" :class='{isActive:routeName=="eperclub"||routeName=="integralList"}' >
            <span class="icon iconfont icon-weibiaoti2fuzhi04"></span>
            <p class="title">EperClub</p>
          </router-link>
        </li>
        <li class="item">
          <router-link to="/userCenter" :class='{isActive:routeName=="userCenter"}'>
            <span class="icon iconfont icon-me"></span>
            <p class="title">Me</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
      return{
          cartNum:0,
          isRouterAlive:true,
          loading:"loading....",
          flag:true,
          footerShow:true,
          routeName:this.$route.name
      }
  },

  beforeMount(){ 
   
  },
  mounted(){
     this.flag = !this.flag;
     this.startGetData(this.routeName)
  },
  methods: {
     startGetData: function(name){
     if(name=="login"||name=="register"){
          this.footerShow= !this.footerShow;
     }else{
          this.footerShow = true
        } 
         let user = localStorage.getItem('user');
         let Base64 = require('js-base64').Base64;
         if(user!=null){
           this.$axios.post('/api/user').then(res=>{
             if(res.status===200 && res.data!=''){
               let userList = res.data.data;
               for(let i=0;i<userList.length;i++){
                 if(userList[i].mobile == Base64.decode(user)){
                   this.cartNum = userList[i].cartNum;
                 }
               }
             }
           })
         }else{
           this.cartNum=0
         }
     }
  },
  watch:{
    '$route'(){
       let routeName = this.$route.name;
       this.routeName = routeName;
        this.startGetData(routeName)
    }
  }
}
</script>


