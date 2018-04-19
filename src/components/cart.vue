<template>
  <div id="cart">
    <header class="header  login_header flex midcenter">
      <h3 class="title  flex rowflexbteew midcenter p30">
        <a href="javascript:;" class="icon js_go_history flag"> < </a>
        <p class=" search">Product Details </p>
        <span class="icon iconfont icon-search icon-sousuo"></span>
        <span class="icon iconfont icon-email icon-xinfeng"></span></h3>
    </header>
    <article class="cart_box">
      <section class="login_cart" v-show="iconShow==true">
        <span class="icon iconfont icon-gouwuche"></span>
        <!--01:没登录的情况-->
        <router-link to="/login" class="btn no_login" v-show="loginShow" >Login</router-link>
        <!--02:已经登录但购物车列表为空的情况-->
        <router-link  to="/" class="btn go_shop" v-show="goShopShow">Start Shopping</router-link>
      </section>
      <!--03：已经登录购物车列表不为空的情况-->
      <section class="cartListBox" id="cartListBox" v-show="listBoxShow==true">
        <p class="sale_activity">Free delivery for orders over 190RMB <a href="index.html" class="go_shopping">Continue shopping</a>
        </p>
        <ul class="cartList_ul total_list p30">
           <li class="item flex rowflex" v-for="item in cartList">
                    <input class="item_check Each" type="checkbox" checked="checked" />
                    <a href="javascript:;" class="item_info flex rowflex">
                        <div class="img_box">
                            <img :src="item.pimg" alt="item.pid"  title="item.pid"/>
                        </div>
                        <div class="p_info">
                            <p class="info">{{item.ptitle}}</p>
                            <p class="i_price">¥ <span class="price">{{item.price}}</span></p>
                             <span class="errinfo">!Price has changed</span>
                                        <dl class="flex rowflex counter">
                                            <dd class="sub">-</dd>
                                            <dd><input class="NumInput" type="text" v-model="item.count" /></dd>
                                            <dd class="push">+</dd>
                                        </dl>
                        </div>
                        <span class="icon del_icon iconfont icon-icon--"></span>
                        <input class="hiddenVal" type="hidden" name="hidden" v-model="total" />
                    </a>
                </li>
        </ul>
      </section>
      <section class="product cart_sale_box">
        <h3 class="title">Hot Products</h3>
        <ul class="product_ul flex">
          <li class="item"><a href="javascript:;">
            <div class="img_box"><img img src="../assets/img/product.png" alt="p02" title="奥利奥"/></div>
            <div class="info_box">
              <p class="info">Organic Italian Lettuce 300g ±5%</p>
              <p class="i_country">Origin:<span>China</span></p>
              <p class="i_price">￥19.00</p>
              <span class="icon icon_add_cart iconfont icon-gouwuchetianjia"></span>
            </div>
          </a></li>
          <li class="item"><a href="javascript:;">
            <div class="img_box"><img img src="../assets/img/product.png" alt="p02" title="奥利奥"/></div>
            <div class="info_box">
              <p class="info">Organic Italian Lettuce 300g ±5%</p>
              <p class="i_country">Origin:<span>China</span></p>
              <p class="i_price">￥19.00</p>
              <span class="icon icon_add_cart iconfont icon-gouwuchetianjia"></span>
            </div>
          </a></li>
          <li class="item"><a href="javascript:;">
            <div class="img_box"><img img src="../assets/img/product.png" alt="p02" title="奥利奥"/></div>
            <div class="info_box">
              <p class="info">Organic Italian Lettuce 300g ±5%</p>
              <p class="i_country">Origin:<span>China</span></p>
              <p class="i_price">￥19.00</p>
              <span class="icon icon_add_cart iconfont icon-gouwuchetianjia"></span>
            </div>
          </a></li>
          <li class="item"><a href="javascript:;">
            <div class="img_box"><img img src="../assets/img/product.png" alt="p02" title="奥利奥"/></div>
            <div class="info_box">
              <p class="info">Organic Italian Lettuce 300g ±5%</p>
              <p class="i_country">Origin:<span>China</span></p>
              <p class="i_price">￥19.00</p>
              <span class="icon icon_add_cart iconfont icon-gouwuchetianjia"></span>
            </div>
          </a></li>
          <li class="item"><a href="javascript:;">
            <div class="img_box"><img img src="../assets/img/product.png" alt="p02" title="奥利奥"/></div>
            <div class="info_box">
              <p class="info">Organic Italian Lettuce 300g ±5%</p>
              <p class="i_country">Origin:<span>China</span></p>
              <p class="i_price">￥19.00</p>
              <span class="icon icon_add_cart iconfont icon-gouwuchetianjia"></span>
            </div>
          </a></li>
          <li class="item"><a href="javascript:;">
            <div class="img_box"><img img src="../assets/img/product.png" alt="p02" title="奥利奥"/></div>
            <div class="info_box">
              <p class="info">Organic Italian Lettuce 300g ±5%</p>
              <p class="i_country">Origin:<span>China</span></p>
              <p class="i_price">￥19.00</p>
              <span class="icon icon_add_cart iconfont icon-gouwuchetianjia"></span>
            </div>
          </a>
          </li>
        </ul>
      </section>

      <section class="checkOut flex rowflexbteew">
        <div class="check_group p30">
          <input type="checkbox" name="check" class="allCheck" checked="checked" id="all" />
          <label>All</label>
        </div>
        <div class="total p30">
          <label>Total:</label><span class="total_p">$<span class="total_p_i">0.00</span></span>
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
               total:''
           }
     },
     beforeMount(){
       let user = localStorage.getItem('user');
       if(user == null){
         this.loginShow= !this.loginShow;
       }else{
           this.goShopShow= !this.goShopShow;
       }
       let Base64 = require('js-base64').Base64;
         this.$axios.post('/api/user').then(res=>{
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


     }
   }
</script>
<style scoped="scoped">
  @import "../assets/css/cart.css";
  @import"../assets/css/product.css";
</style>
