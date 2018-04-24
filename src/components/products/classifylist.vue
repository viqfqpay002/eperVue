<template>
 <div id="classifylist">
   <header class="header flex midcenter login_header">
     <h3 class="title flex rowflexbteew p30">
      <a href="javascript:;" class="icon js_go_history" @click="activated"> < </a>
      <p>{{title}}</p>
      <span class="icon iconfont icon-sousuo"></span>
      <span class="icon iconfont icon-tab"></span>
    </h3>
  </header>
  <article class="classifylist">
     <transition name="fade">
    <div class="mark" v-if="flag" @click="closelaber"></div>
  </transition>
    <section class="menuTop">
     <ul class="topnav flex rowflex midcenter">
       <li class="item"><a href="javascript:;">12</a></li>
       <li class="item"><a href="javascript:;">12</a></li>
       <li class="item"><a href="javascript:;">12</a></li>
       <li class="item"><a href="javascript:;">12</a></li>
     </ul>
     <ul class="menuBox flex rowflexbteew midcenter">
      <li class="item" v-for="(item,index) in selectNav" >
        <a href="javascript:;" @click="selectTab(item,index)" >{{item.navTxt}}<span class="icon"></span></a>
     <transition name="fade">
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
  <section class="banner">
    <a href="javascript:;">
      <img src="../../assets/img/banner.png" alt="banner"/>
    </a>
  </section>
  <section class="product">
    <ul class="product_ul flex rowflex midcenter">
     <li class="item" v-for="(item,index) in goodsList">
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
   tabIndex:''
 }
},
created(){

},
beforeMount(){
  this.startData()
},
methods: {
  activated: function () {
   this.$setgoindex()
 },
 startData: function(){
   let classilyId = this.$route.query.id;
   this.$axios.post('/api/categories',{"classilyId":classilyId}).then(res=>{
     if(res.status===200){
       res.data.navList.forEach((item,index)=>{
        if(item.classilyId==classilyId){
         this.title = item.navMsg
       }
     });
       res.data.menuList.forEach((item,index)=>{
         item.classilyList.forEach((list,index)=> {
          if(list.classilyId==classilyId){
            this.title = list.title
          }
        });

       })
     }
   })
   this.$axios.post('/api/classily',{"classilyId":classilyId}).then(res=>{
    if(res.status===200){
     this.selectNav = res.data.navClassily;
     // this.goodsList = res.data.classilyitem
   }

 });
   //模拟list数据
    this.$axios.post('/api/indexList',{"classilyId":classilyId}).then(res=>{
    if(res.status===200){
     this.goodsList = res.data.data  
   }

 });
 },
  selectTab:function(item,index){
    this.$nextTick(function(){
      this.tabIndex = index;
      this.flag=true;
      this.selectItem = item.selectList;
    })
     
   },
  closelaber:function(){
    this.flag=false
  } 
},
}
</script>
<style scoped="scoped">
@import '../../assets/css/classily.css';
@import '../../assets/css/product.css'
</style>
