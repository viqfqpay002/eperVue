<template>
   <div id="goodsDetails">
     <header class="header flex midcenter login_header">
       <h3 class="title flex rowflexbteew p30"><a href="javascript:;" class="icon js_go_history"> < </a> <p>Product Details</p>
        <span class="icon iconfont icon-aixin"></span>
       </h3>
     </header>
       <article class="goodsDetails">
          <div class="imgShow">
             <ul class="imgShowUl">
                <li class="item">
                  <a href="javascript:;">
                     <img src=""/>
                  </a>
              </li>
                 <li class="item">
                  <a href="javascript:;">
                     <img src=""/>
                  </a>
              </li>
                 <li class="item">
                  <a href="javascript:;">
                     <img src=""/>
                  </a>
              </li>
             </ul>
              <div class="tabIcon"></div>
          </div>
          <div class="msgBox">
             <h4 class="title">Eper精选 特级水蜜桃白草莓15pcs 300g~350g</h4>
             <p class="price">￥280.00 <del>￥600.00</del></p>
             <p class="source">原产地:<span>China</span></p>
             <p class="size">包装规格:<span>300g~500g</span></p>
             <p class="shelfLife">保质期:<span>3</span>天</p>
          </div>

          <div class="sale_products">
              <h3 class="title">推荐商品</h3>
              <ul class="productul">
                 <li class="item">
                  <a href="javascript:;">
                    <img src="" alt="">
                  </a>
                  <div class="infobox">
                     <h6 class="title"> 美国青苹果 4pcs 550g-580g</h6>
                     <p class="source">原产地:<span>美国</span></p>
                     <p class="price">￥280.00</p>
                     <span class="icon icon_add_cart iconfont icon-gouwuchetianjia"></span>
                  </div>
                </li>
                 <li class="item">
                  <a href="javascript:;">
                    <img src="" alt="">
                  </a>
                  <div class="infobox">
                     <h6 class="title"> 美国青苹果 4pcs 550g-580g</h6>
                     <p class="source">原产地:<span>美国</span></p>
                     <p class="price">￥280.00</p>
                     <span class="icon icon_add_cart iconfont icon-gouwuchetianjia"></span>
                  </div>
                </li>
                 <li class="item">
                  <a href="javascript:;">
                    <img src="" alt="">
                  </a>
                  <div class="infobox">
                     <h6 class="title"> 美国青苹果 4pcs 550g-580g</h6>
                     <p class="source">原产地:<span>美国</span></p>
                     <p class="price">￥280.00</p>
                     <span class="icon icon_add_cart iconfont icon-gouwuchetianjia"></span>
                  </div>
                </li>

              </ul>
          </div>
          <div class="goods_info">
              <h3 class="title">商品描述</h3>
               <div class="imgs">
                  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
               </div>
          </div>
       </article>
   </div>
</template>
<script>
  export default {
       name:"goodsDetails",
        data(){
            return{
               product:[]
            }
        },
     beforeMount(){
           this.$axios.get('/api/indexList').then(res=>{
              if(res.status==200&&res.data.data.length>0){
                 this.product = res.data.data;

              }
           })
  },
       methods:{
       
       }

  }
</script>
<style scoped="scoped">
   @import "../../assets/css/goodsDetails.css";
</style>
