<template>
   <div id="goodsDetails">
     <header class="header flex midcenter login_header">
       <h3 class="title flex rowflexbteew p30">
        <a href="javascript:;" class="icon js_go_history" @click="activated"> < </a>
        <p>Product Details</p>
        <span class="icon iconfont icon-aixin"></span>
       </h3>
     </header>
       <article class="goodsDetails">
          <div class="imgShow swiper-container" id="detailImg">
             <ul class="imgShowUl swiper-wrapper">
                <li class="item swiper-slide">
                  <a href="javascript:;" >
                     <img :src="pImg" />
                  </a>
              </li>
             </ul>
              <div class="index-p"></div>
          </div>
          <div class="msgBox">
             <h4 class="title">{{ptitle+specification}}</h4>
             <p class="price">￥{{pPrice|keepTwoNum}} <del>￥600.00</del></p>
             <p class="source">原产地:<span>{{pSource}}</span></p>
             <p class="size">包装规格:<span>{{specification}}</span></p>
             <p class="shelfLife">保质期:<span>{{shelf}}</span>天</p>
          </div>
  
          <div class="center">
          <div class="sale_products swiper-container" id="saleScorll">
              <h3 class="title">推荐商品</h3>
              <ul class="productul flex rowflex swiper-wrapper">
                 <li class="item swiper-slide" v-for="item in product">
                  <router-link :to="{name:'detail',params:{id:item.pId}}" >
                    <img :src="item.pImg" :alt="item.pId">
                  </router-link>
                  <div class="infobox">
                     <h6 class="title">{{item.pTitle}}{{item.specification}}</h6>
                     <p class="source">原产地:<span>{{item.pOrigin}}</span></p>
                     <p class="price">￥{{item.price|keepTwoNum}}</p>
                     <span class="icon icon_add_cart iconfont icon-gouwuchetianjia"></span>
                  </div>
                </li>
              </ul>
          </div>
        </div>
          <div class="goods_info">
              <h3 class="title">商品描述</h3>
               <div class="imgs">
                  这是一个好商品，好看，好吃......
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
               </div>
          </div>

       </article>  
       <footer class="cart_footer footer ">
        <div class="innerpadding flex rowflexbteew midcenter">
        <span class="icon icon_add_cart iconfont icon-gouwuchetianjia"><strong>10</strong></span>
        <dl class="flex rowflex counter">
          <dd class="sub" @click="changeCount(-1)">-</dd>
          <dd><input class="NumInput" type="text" v-model="count"/></dd>
          <dd class="push" @click="changeCount(1)">+</dd>
        </dl>
        <button type="button" class="addCart">加入购物车</button>
      </div>
      </footer>
      
      </div>
</template>
<script>
  export default {
       name:"goodsDetails",
        data(){
            return{
               product:[],
               pImg:[],
               ptitle:"",
               pSource:"",
               pPrice:"",
               specification:"",
               pOrigin:"",
               pIcon:"" , //用来显示icon标记的
               shelf:"",
               count:1,
              
            }
        },
  created(){
     this.startData()
  },
  methods: {
      activated: function () {
                 this.$setgoindex()
                 },
     startData: function(){
             const routeId = this.$route.params.id
             this.$axios.get('/api/indexList'/*,{params:{id:routeId}}*/).then(res=>{
              if(res.status==200&&res.data.data.length>0){
                 this.product = res.data.data
                  for(let list of res.data.data){
                     if(routeId==list.pId){
                           this.show==this.show;
                           this.pImg=list.pImg,
                           this.ptitle=list.pTitle,
                           this.pSource=list.pOrigin,
                           this.pPrice=list.price,
                           this.specification=list.specification,
                           this.pIcon=list.pIcon;
                           this.shelf = list.shelf;
                     }
                  }
                    this.$nextTick(function(){
                     new Swiper('#detailImg', {
                     autoplay: 3000,
                     pagination : '#detailImg .index-p',
                  });
                     new Swiper('#saleScorll', {
                      loop:true,
                      slidesPerView: 'auto',
                      loopedSlides: 7,
                  });

              });
              }
           })   
     },
      changeCount: function(way){
          if(way>0){
              this.count++;
            if(this.count>=50){
                this.count=50
            }
          }else{
              this.count--;
            if(this.count<1){
                 this.count=1
            }
          }
       },
  },
   watch:{
    '$route'(){
          this.startData()
         }
          }
                
          
  }
</script>
<style scoped="scoped">
   @import "../../assets/css/goodsDetails.css";
   </style>
