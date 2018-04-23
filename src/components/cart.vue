<template>
  <div id="cart">
    <header class="header  login_header flex midcenter">
      <h3 class="title  flex rowflexbteew midcenter p30">
        <a href="javascript:;" class="icon js_go_history flag" @click="activated"> < </a>
        <p class=" search">cart </p>
        <span class="icon iconfont icon-search icon-sousuo"></span>
        <span class="icon iconfont icon-email icon-xinfeng"></span></h3>
      </header>
      <article class="cart_box">
        <section class="login_cart" v-show="iconShow">
          <span class="icon iconfont icon-gouwuche"></span>
          <!--01:没登录的情况-->
          <router-link to="/login" class="btn no_login" v-show="loginShow" >Login</router-link>
          <!--02:已经登录但购物车列表为空的情况-->
          <router-link  to="/" class="btn go_shop" v-show="goShopShow">Start Shopping</router-link>
        </section>
        <!--03：已经登录购物车列表不为空的情况-->
        <section class="cartListBox" id="cartListBox" v-show="listBoxShow">
          <p class="sale_activity">Free delivery for orders over 190RMB <router-link to="/" class="go_shopping">Continue shopping</router-link>
          </p>
          <ul class="cartList_ul total_list p30">
           <li class="item flex rowflex" v-for="(item,index) in cartList">
            <input class="item_check Each" type="checkbox"  @click="selectCheckItem(item)" :checked="item.checked"/>
            <router-link :to="{name:'detail',params:{ id:item.pid}}" class="item_info ">
              <div class="img_box flex rowflex midcenter">
                <img :src="item.pimg" alt="item.pid"  title="item.pid"/>
              </div>
            </router-link>
            <div class="p_info">
              <p class="info">{{item.ptitle}}</p>
              <p class="i_price">¥ <span class="price">{{item.price}}</span></p>
              <transition name="component-fade" mode="out-in">
                <span class="errinfo" v-if="item.count>=50?true:false">!Price has changed</span>
              </transition>
              <dl class="flex rowflex counter">
                <dd class="sub" @click="changeCount(item,-1)">-</dd>
                <dd><input class="NumInput" type="text" v-model="item.count"/></dd>
                <dd class="push" @click="changeCount(item,1)">+</dd>
              </dl>
            </div>
            <span class="icon del_icon iconfont icon-icon--" @click="delItem(index)"></span>

          </li>
        </ul>
      </section>
      <section class="product cart_sale_box">
        <h3 class="title">Hot Products</h3>
        <ul class="product_ul flex">
          <li class="item" v-for="(item,index) in hotList">
            <router-link :to="{name:'detail',params:{ id:item.pId}}">
              <div class="img_box">
                <img :src="item.pImg" :alt="item.pId" :title="item.pTitle"/>
              </div>
              <div class="info_box">
                <p class="info">{{item.pTitle}} {{item.specification}}</p>
                <p class="i_country">Origin:<span>{{item.pOrigin}}</span></p>
                <p class="i_price">￥{{item.price|keepTwoNum}}</p>
              </div>
            </router-link>
            <span :class="['icon','icon_add_cart','iconfont','icon-gouwuchetianjia',{'no_icon':item.inventory>1?'':'no_icon'}]"></span>
          </li>
        </ul>
      </section>

      <section class="checkOut flex rowflexbteew">
        <div class="check_group p30">
          <input type="checkbox" name="check" class="allCheck" @click="allClecked()" id="all" />
          <label>All</label>
        </div>
        <div class="total p30">
          <label>Total:</label><span class="total_p">$<span class="total_p_i">{{total|keepTwoNum}}</span></span>
          <a href="javascript:;" class = "total_btn" id=" js_total_btn">Check Out</a>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
 name:"cart",
 data(){
   return{
     loginShow:false,
     goShopShow:false,
     listBoxShow:false,
     iconShow:true,
     cartList:[],
     total:0,
     allCheckedFlag:false,
     hotList:[],


   }
 },
 beforeMount(){

 },
 mounted: function() {
   this.$nextTick(function() {
     this.startGetData();
   })
 },
 methods:{
  activated: function () {
     this.$setgoindex()
  },
  startGetData: function(){
   let user = localStorage.getItem('user');
   if(user == null){
     this.loginShow= !this.loginShow;
   }else{
     this.goShopShow= !this.goShopShow;
   }
   let Base64 = require('js-base64').Base64;
   this.$axios.post('/api/user',{uid:Base64.decode(user)}).then(res=>{
     if(res.data.data.length>0){
       for(let i=0;i<res.data.data.length;i++){
         if(res.data.data[i].mobile === Base64.decode(user)){
           this.cartList = res.data.data[i].cartList;
           if(this.cartList.length>0){
             this.iconShow = !this.iconShow;
             this.listBoxShow=!this.listBoxShow;
           }
         }
       }
     }
   }).catch(res=>{
     console.log(res.msg)
   });
   this.$axios.get("/api/indexList").then(res=>{
     if(res.data.data.length>=0){
       this.hotList = res.data.data;
     }
   })
 },
 selectCheckItem:function(item){
   if(typeof item.checked==="undefined"){
     this.$set(item,"checked",true);
   }else {
     item.checked =!item.checked;
   }
   this.itemTotal();
 },
 itemTotal: function(){
   this.total = 0;
   this.cartList.forEach((item,index)=>{
     if(item.checked){
       this.total += item.price*item.count;
     }
   })
 },
 changeCount: function(item,way){
  if(way>0){
    item.count++;
    if(item.count>=50){
      item.count=50
    }
  }else{
    item.count--;
    if(item.count<1){
     item.count=1
   }
 }
 this.itemTotal()
},
allClecked: function(){
  this.allCheckedFlag = !this.allCheckedFlag;
  this.cartList.forEach((item,index)=>{
    if (typeof item.checked == 'undefined') {
      this.$set(item, "checked",this.allCheckedFlag);
    }
    else {
      item.checked = this.allCheckedFlag;
    }
  });
  this.itemTotal()
},
delItem: function(i){
 let user = localStorage.getItem('user');
 let Base64 = require('js-base64').Base64;
 this.cartList.forEach((item,index)=>{
   if(i==index){
     this.$axios.post("/api/user",{uid:Base64.decode(user),pid:item.pid}).then(res=>{
       this.cartList.splice(index,1);
       this.itemTotal();
       if(this.cartList.length<=0){
         this.goShopShow=true;
         this.listBoxShow=false;
         this.iconShow=true;
       }
     });

   }
 });
},

}
}
</script>
<style scoped="scoped">
@import "../assets/css/cart.css";
@import"../assets/css/product.css";
</style>
