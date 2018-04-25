<template>
  <div id="caterigres">
    <header class="header flex midcenter">
      <ul class="header_bar flex midcenter rowflex rowflexbteew p30">
        <li class="item flag">
          <span class="icon icon_flag" id="js_flag_select"><img src="../assets/img/fr.png" alt="fr"/></span>
          <span class="icon icon_arrow"></span>
          <div class="item_list" >
            <dl>
              <span class="icon icon_flag icon_CN"><img src="../assets/img/fr.png" alt="fr"/></span>
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
          <h3 class="title">Categories</h3>
          <!--  <input type="text" class="search_input" placeholder="Search..."> -->
          <span class="icon iconfont icon-search icon-sousuo"></span>
        </li>
        <li class="item email">
          <a href="javascript:;" class="icon iconfont icon-email icon-xinfeng"></a>
        </li>

      </ul>
    </header>
    <article>
      <section class="scroll-box ">
        <div class="swiper-container"  id="cag_list">
          <ul class="scroll_nav flex rowflexbteew swiper-wrapper ">
            <li class="item  swiper-slide " v-for="item in navList">
              <router-link :to="{name:'classily',params:{id:item.classilyId}}">
               <span class="icon">
                <img :src="item.navIcon" alt="tip" title="tips"/>
              </span>
              <p class="info">{{item.navMsg}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <section class="select_cate">
      <div class="select_ul flex">
        <a href="javascript:;" :class="['item',{'active':index==flag?true:false}]" v-for="(item,index) in menuList" @click="tabChecked(index)"><span class="icon"></span>{{item.txt}}</a>
      </div>
    </section>
    <section class="cate_list_show p30">
      <h3 class="title flex rowflexbteew">
    
        <p><span id="showTab">{{txt}}</span> <span class="icon"></span> <em></em></p>
      
        <a href="javascript:;">All <span class="icon iconfont icon-jiantouxi"></span></a>
      </h3>
      <ul class="cate_show_ul flex" > 
        <li class="item" v-for="(item,index) in classifyList">
          <router-link :to="{name:'classily',params:{id:item.classilyId}}">
            <img :src="item.classilyImg" alt="item.classilyId" title='item.title'/>
            <p class="info">{{item.title}}</p>
          </router-link>
        </li>
      </ul>
   </transition>
    </section>
    <a class="bottomImg p30">
      <img src="../assets/img/cateBottomimg.png" alt="bottomimg" title="bottom"/>
    </a>
  </article>
</div>
</template>

<script>
export default {
  name: 'caterigres',
  data () {
    return {
      navList:[],
      menuList:[],
      classifyList:[],
      txt:"",
      flag:0
    }

  },
  created(){

  },
  beforeMount(){
    this.startGetData();
 },
 mounted () {

 },
 methods:{
  startGetData:function(){
       this.$axios.get('/api/categories').then(res=>{
     if(res.status==200&&res.data.navList.length>0) {
      this.navList = res.data.navList;
      this.menuList = res.data.menuList;
      this.txt = this.menuList[0].txt;
      this.classifyList = this.menuList[0].classilyList;
      this.$nextTick(function(){
        new Swiper('#cag_list', {
          effect : 'horizontal',
          slidesPerView: "auto",
          centeredSlides:false,
          spaceBetween: 10,
        });
      })
    }
  })
},
   tabChecked:function(i){
     this.menuList.forEach((item,index)=>{
      if(i===index){
        this.txt = this.menuList[index].txt; 
        this.flag = index;
        this.classifyList = this.menuList[index].classilyList;    
      }
     })
   },
   roterLink :function(i){
      this.classifyList.forEach((item, index)=> {
         if(i == index){
          this.$router.push({path:'/classily',params:{id:item.classilyId}});
        }
     });
    
     
   }
 }
}

</script>

<style scoped="scoped">
@import "../assets/css/categories.css";
</style>
