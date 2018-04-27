<template>
   <div id="userCenter">
     <header class="header flex midcenter">
       <ul class="header_bar flex midcenter rowflex p30">
         <li class="item flag" >
           <span class="icon icon_flag" id="js_flag_select"><img src="../../assets/img/fr.png" alt="fr"/></span>
           <span class="icon icon_arrow"></span>
           <div class="item_list" >
             <dl>
               <span class="icon icon_flag icon_CN"><img src="../../assets/img/fr.png" alt="fr"/></span>
               中文
             </dl>
             <dl>
               <span class="icon icon_flag icon_EN"><img src="../../assets/img/fr.png" alt="fr"/></span>
               English
             </dl>
             <dl>
               <span class="icon icon_flag icon_FR"><img src="../../assets/img/fr.png" alt="fr"/></span>
               Francais
             </dl>
           </div>
         </li>
         <li class="item search">
           <h3 class="title">Me</h3>
           <!--  <input type="text" class="search_input" placeholder="Search..."> -->
           <span  class="icon iconfont icon-search icon-shezhi" id="js_set" @click="goSettings()"></span>
         </li>
         <li class="item email">
           <a href="javascript:;" class="icon iconfont icon-email icon-xinfeng"></a>
         </li>

       </ul>
     </header>
     <article class="userCenter-wrap">
       <section class="usercenter_banner p40">
         <div class="usercenter_msg  ">

           <div class="userCenterNoLogin" v-if="isShow==true" >
             <p class="info">Better Quality, Better Life</p>
             <p class="linkLogin">
               <router-link to="/login">Login</router-link>
               <router-link to="/register">Register</router-link>
             </p>
           </div>

           <div class="userCenterLogin" v-if="isShow==false" >
             <p class="info">Welcome <span class="usercenter_name">{{username}}</span><span class="icon"></span></p>
             <p class="userlevel">{{grade}}</p>
             <ul class="user_msg_list flex rowflexbteew"  >
               <li class="item">
                 <p class="info">Account Balance</p>
                 <p class="info_count">${{account|keepTwoNum}}</p>
               </li>
               <li class="item">
                 <p class="info">My Coupons</p>
                 <p class="info_count">{{coupons}}</p>
               </li>
               <li class="item">
                 <p class="info">My Points</p>
                 <p class="info_count">{{integral}}</p>
               </li>
             </ul>
           </div>
         </div>
         <dl class="com_tips flex rowflexbteew">
           <dd><span class="icon iconfont icon-dianhua2"></span>400-7760-776</dd>
           <dd><span class="icon iconfont icon-xinfeng"></span>service@epermarket.com</dd>
         </dl>
       </section>


       <section class="usercenter_nav">
         <ul class="usercenter_nav_ul flex rowflex midcenter">
           <li class="item"><a href="javascript:;">
             <span class="icon iconfont icon-file"></span>
             <p class="title">My Order History</p>
           </a></li>
           <li class="item"><a href="javascript:;">
             <span class="icon iconfont icon-jiaren"></span>
             <p class="title">My Information</p>
           </a></li>
           <li class="item"><a href="javascript:;">
             <span class="icon iconfont icon-weibiaoti8 "></span>
             <p class="title">MarketPlace</p>
           </a></li>
           <li class="item"><a href="javascript:;">
             <span class="icon iconfont icon-renyuanguanli"></span>
             <p class="title">Share</p>
           </a></li>
           <li class="item"><a href="javascript:;">
             <span class="icon iconfont icon-aixin"></span>
             <p class="title">My Lists</p>
           </a></li>
           <li class="item"><a href="javascript:;">
             <span class="icon iconfont icon-daizi"></span>
             <p class="title">Necessities</p>
           </a></li>
           <li class="item"><a href="javascript:;">
             <span class="icon iconfont icon-xiaolian"></span>
             <p class="title">About Us</p>
           </a></li>
           <li class="item"><a href="javascript:;">
             <span class="icon iconfont icon-tuiguangzhuanqianxian"></span>
             <p class="title">My Points History</p>
           </a></li>
           <li class="item"><a href="javascript:;">
             <span class="icon iconfont icon-renminbi201"></span>
             <p class="title">Coupon Corner</p>
           </a></li>
         </ul>
       </section>


     </article>
   </div>
</template>
<script>
import {userLogin} from '../../axios/api';
   export default{
       name:"userCenter",
       data(){
           return{
               isShow:true,
               integral:0,
               account:0,
               coupons:0,
               grade:"普通会员",
               username:""
           }
       },
     beforeMount(){
       
     },
     mounted(){
      this.startGetData()
     },
     methods:{
      startGetData: function(){
       let uid = localStorage.getItem('token');
       let Base64 = require('js-base64').Base64;
       let usp = localStorage.getItem('usp');
       let status = localStorage.getItem('status');
       if(/*status!=="1"*/uid===""){
         this.isShow= true;
       }else {
      /*   userLogin(Base64.decode(uid),usp).then(res=>{
          console.log(res.data.data);
           if(res.data.data.ComMobile===Base64.decode(uid)){
               this.integral= res.data.data.CusJiFen;
                  this.account =res.data.data.CusFundAmount;
                 this.coupons = res.data.data.CanCashVoucherNum;
                 this.grade = res.data.data.CusLevelID;
                  if(res.data.data.UserName===""){
                     this.username = res.data.data.ComMobile
                 }else {
                      this.username = res.data.data.UseName
                 }
           }
         })*/
         this.$axios.post('/api/user').then(res=>{
           let data = res.data.data;
           if(data.length>0){
             for(let i=0;i<data.length;i++){
               if(data[i].mobile===Base64.decode(uid)){
                 this.integral= data[i].integral;
                 this.account = data[i].account;
                 this.coupons = data[i].coupons;
                 this.grade = data[i].grade;
                 if(data[i].username===""){
                     this.username = data[i].mobile
                 }else {
                     this.username = data[i].username
                 }

               }
             }
           }
         })
       }
      },
      goSettings: ()=>{
         let uid = localStorage.getItem('token');
         if(uid===null||uid===0){
           
         }

      }
     }
   }
</script>
<style scoped="scoped">
  @import "../../assets/css/me.css";
</style>
