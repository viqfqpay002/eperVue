<template>
  <div class="index">
    <header class="header flex midcenter">
      <ul class="header_bar flex midcenter rowflex p30">
        <li class="item flag" >
          <span class="icon icon_flag" id="js_flag_select"><img src="../assets/img/fr.png" alt="fr"/></span>
          <span class="icon icon_arrow"></span>
          <div class="item_list" >
            <dl>
              <span class="icon icon_flag icon_CN"><img src="../assets/img/fr.png" alt="fr" /></span>
              中文
            </dl>
            <dl>
              <span class="icon icon_flag icon_EN"><img src="../assets/img/fr.png" alt="fr"/></span>
              English
            </dl>
            <dl>
              <span class="icon icon_flag icon_FR"><img src="../assets/img/fr.png" alt="fr"/></span>
              Francais
            </dl>
          </div>
        </li>
        <li class="item search flex-big">
          <input type="text" class="search_input" placeholder="Search...">
          <span class="icon iconfont icon-search icon-sousuo"></span>
        </li>
        <li class="item email">
          <a href="javascript:;" class="icon iconfont icon-email icon-xinfeng"></a>
        </li>

      </ul>
    </header>
    <article>
      <section class="banner swiper-container" id="index-banner">
        <ul class="banner_ul swiper-wrapper ">
          <li v-for="item in banner"class="item swiper-slide">
             <a :href="item.bhref">
               <img :src="item.bImg" title="banner"/>
             </a>
          </li>
        </ul>
        <div class="swiper-pagination index-p"></div>
        <div class="swiper-button-prev prev"></div>
        <div class="swiper-button-next next"></div>
      </section>
      <section class="classify flex midcenter">
        <ul class="classify_ul flex midcenter rowflexbteew">
          <li class="item"><a href="javascript:;"><span class="icon iconfont icon-icon-test1"></span>
            <p class="info">Trusted products</p>
          </a></li>
          <li class="item"><a href="javascript:;"><span class="icon iconfont icon-che"></span>
            <p class="info">Free Delivery above 190RMB</p>
          </a></li>
          <li class="item"><a href="javascript:;"><span class="icon iconfont icon-iconset0313"></span>
            <p class="info">7000+ products</p>
          </a></li>
        </ul>
      </section>
      <!--user-no-login-->

      <section class="user_login" id="user_login" v-if="flag">
        <div class="user_login_box p30">
          <h3 class="title">Better Quality, Better Life</h3>
          <div class="user_btns flex midcenter">
            <router-link  to='/Login' class="user_login user_btn active">Login</router-link>
            <router-link  to="/register" class="user_register user_btn">Register</router-link>
          </div>
        </div>
      </section>

      <section class="entry">
        <ul class="entry_ul flex rowflex midcenter">
          <li class="item"><a href="javascript:;">
            <div class="img_box">
              <img src="../assets/img/entry01.png" alt="topup" title="topup"/>
            </div>
            <p class="info">Top Up</p>

          </a></li>
          <li class="item"><a href="javascript:;">
            <div class="img_box">
              <img src="../assets/img/entry02.png" alt="onsale" title="onsale"/>
            </div>
            <p class="info">On Sale</p>

          </a></li>
          <li class="item"><a href="javascript:;">
            <div class="img_box">
              <img src="../assets/img/entry03.png" alt="eperBox" title="eperBox"/>
            </div>
            <p class="info">EperBox</p>

          </a></li>
        </ul>
      </section>

      <section class="middleBanner flex midcenter">
        <ul class="middleBanner_ul p30 flex midcenter rowflex">
          <li class="item"><a href="javascrpt:;"><img src="../assets/img/banner.png" alt="banner" title="banner"/></a></li>
        </ul>
      </section>
      <section class="mianContent">
        <section class="product">
          <ul class="product_ul flex" >
            <li class="item" v-for="(item,index) in product">
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
          <a href="javascript:;" class="more">More →<span class="icon"></span></a>
        </section>
        <section class="banner_more">
          <ul class="banner_more_ul">
            <li class="item"><a href="javascript:;"><img src="../assets/img/banner.png" alt=""></a></li>
          </ul>
        </section>
        <section class="product">
          <ul class="product_ul flex">
           <li class="item" v-for="(item,index) in product">
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
          </li>
          </ul>
          <a href="javascript:;" class="more">More →<span class="icon"></span></a>
        </section>
      </section>
      <section class="f_brands">
        <h3 class="title">Pick Your Favorite Brands</h3>
        <ul class="f_brands_ul flex midcenter">
          <li class="item" v-for="(item,index) in brands">
            <a href="javascript:;">
              <img :src="item" :alt="index" :title="index"/>
            </a>
          </li>
        </ul>
      </section>

    </article>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
          flag:true,
          product:[],
          banner:[],
          brands:[]
    }

  },
  beforeMount() {
     this.getData()
  },
  methods: {
     getData: function(){
           let uid = localStorage.getItem('token');
    if(uid!=null){
      this.flag= !this.flag;
    }
     this.$axios.get('/api/indexList').then(res=>{
        if(res.status==200){
            this.banner=res.data.banners;
            this.product = res.data.data;
            this.brands = res.data.Brands;
            this.$nextTick(function(){
                 new Swiper('#index-banner', {
                     autoplay: 3000,
                     pagination : '#index-banner .index-p',
                     prevButton:'#index-banner .prev',
                    nextButton:'#index-banner .next',
                  });

              });
        };
     });
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped="scoped">
  @import"../assets/css/index.css";
  @import"../assets/css/product.css";
</style>
