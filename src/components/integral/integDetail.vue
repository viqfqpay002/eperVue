<template>
   <div id="integDetail">
     <header class="header flex midcenter login_header">
       <h3 class="title flex rowflexbteew p30">
        <a href="javascript:;" class="icon js_go_history" @click="$setgoindex()"> < </a>
        <p>{{title}}</p>
        <span class="icon iconfont icon-aixin"></span>
       </h3>
     </header>
       <article class="goodsDetails">
          <div class="imgShow swiper-container" id="integdetailImg">
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
             <h4 class="title">{{ptitle}}</h4>
             <p class="price">{{integ}} | <span>￥{{price}}</span></p>
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
        <button type="button" class="addCart">Exchange Now</button>
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
                     new Swiper('#integdetailImg', {
                     autoplay: 3000,
                     pagination : '#integdetailImg .index-p',
                  });

              });
              }
           })   
     },
   watch:{
    '$route'(){
          this.startData()
         }
          }
                
          
  }
}
</script>
<style scoped="scoped">
   @import "../../assets/css/goodsDetails.css";
   </style>
