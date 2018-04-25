<template>
 <div id="classifylist">
   <header class="header flex midcenter login_header">
     <h3 class="title flex rowflexbteew p30">
      <a href="javascript:;" class="icon js_go_history" @click="activated"> < </a>
      <p>{{title}}</p>
      <span class="icon iconfont icon-sousuo"></span>
      <span :class="['icon','iconfont','icon-tab',goodsStyle?'icon-row':'icon-col']" @click="goodsStyleTab"></span>
    </h3>
  </header>
  <article class="classifylist">
     <transition name="slide-fade">
    <div class="mark" v-if="flag" @click="closelaber"></div>
  </transition>
    <section class="menuTop">
     <ul class="topnav flex rowflex midcenter" v-show="!show">
       <li class="item"><a href="javascript:;">12</a></li>
       <li class="item"><a href="javascript:;">12</a></li>
       <li class="item"><a href="javascript:;">12</a></li>
       <li class="item"><a href="javascript:;">12</a></li>
     </ul>
     <ul class="menuBox flex rowflexbteew midcenter">
      <li class="item" v-for="(item,index) in selectNav" >
        <a href="javascript:;" :class="[index==tabIndex?'active':'']"  @click="selectTab(item,index)" >{{item.navTxt}}<span class="icon"></span></a>
     <transition name="slide-fade">
        <ul class="itemBox flex rowflex midcenter" v-show="flag" >
         <li class="item" v-for="list in selectItem">
          <a href="javascript:;">{{list.txt}}</a>
        </li>
      </ul>
    </transition>
    </li>
  </ul>
</section>
<div class="scroll_body">
  <section class="banner" v-show="show">
    <a href="javascript:;">
      <img src="../../assets/img/banner.png" alt="banner"/>
    </a>
  </section>
  <section class="product">
    <ul class="product_ul flex rowflex midcenter">
     <li :class="['item',{'item_tab':goodsStyle?true:false}]" v-for="(item,index) in goodsList">
      <router-link :to="{name:'detail',params:{ id:item.pId}}">
       <div class="img_box flex midcenter">
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
</div>
</article>  
</div>
</template>
<script>
export default {
 name:"classifylist",
 data(){
  return{
   title:"",
   selectNav:[],
   selectItem:[],
   goodsList:[],
   flag:false,
   show:true,
   tabIndex:0,
   goodsStyle:false
 }
},
created(){

},
beforeMount(){
  this.startData();
},
methods: {
  activated: function () {
   this.$setgoindex()
 },
 startData: function(){
  // 头部title显示
   let classilyId = this.$route.params.id;
   this.$axios.post('/api/categories',{"classilyId":classilyId}).then(res=>{
     if(res.status===200){
       res.data.navList.forEach((item,index)=>{
        if(item.classilyId==classilyId){
         this.title = item.navMsg;
         this.$nextTick(function(){
              this.show=true
         }) 
       }
     });
       res.data.menuList.forEach((item,index)=>{
         item.classilyList.forEach((list,index)=> {
          if(list.classilyId==classilyId){
            this.title = list.title;
            this.$nextTick(function(){
               this.show=false;
            })
           
          }
        });

       })
     }
   });
   // 分类页筛选条件数据
   this.$axios.post('/api/classily',{"classilyId":classilyId}).then(res=>{
    if(res.status===200){
     this.selectNav = res.data.navClassily;
   }

 });
   //模拟list数据
    this.$axios.post('/api/indexList',{"classilyId":classilyId}).then(res=>{
    if(res.status===200){
     this.goodsList = res.data.data  
   }

 });
    this.$axios.get(this.HOST+'/ProductApi.asmx/getHotGoodsList?LanguageID=1&VerCode=123456').then(res=>{
       
  
 });
 },
 //点击显示筛选列表
  selectTab:function(item,index){
    this.$nextTick(function(){
      this.tabIndex = index;
      this.flag=true;     
      this.selectItem = item.selectList;
    })
     
   },
  //关闭筛选
  closelaber: function(){
    this.flag=false
  },

  //goods样式切换
  goodsStyleTab: function(){
     this.goodsStyle = !this.goodsStyle
  } 


},
}
</script>
<style scoped="scoped">
@import '../../assets/css/classily.css';
@import '../../assets/css/product.css'
</style>
