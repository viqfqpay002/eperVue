<template>
 <div id="integralList">
   <header class="header flex midcenter login_header">
     <h3 class="title flex rowflexbteew p30">
      <a href="javascript:;" class="icon js_go_history" @click="activated"> < </a>
       <p>My Points History</p>
       <router-link to="/eperclub" class="icon iconfont icon-weibiaoti2fuzhi04"></router-link>
     </h3>
   </header>
   <article class="integralList">
    <div class="nodata">
     <img src="../../assets/img/points_empty.png" title="img"/>
     <p class="tips">Exchange your points for special gifts</p>
   </div>
   <div class="inteMsg">
     <p>当前积分:<span>{{newintegral}}</span>积分</p>
     <p>累积积分(近6个月):<span>{{sixTotalIntegral}}</span>积分</p>
     <p>会员等级:<span class="laver">{{laver}}</span></p>
     <p class="tips">您还需要<span>80000</span>积分即可成为 <span>金卡会员</span></p>
   </div>
   <div class="title_tab flex rowflexbteew">
    <a href="javascript:;" v-for="(item,index) in titleArray" @click="tabClik(index)" v-bind:class="{isActive:index==isacitveid}">{{item}}</a>
  </div>
  <transition name="component-fade" mode="out-in">
    <history-list  v-if="flag2" v-bind:historyList = "historyList"></history-list>
    <exchange-list v-else v-bind:exchangeList = "exchangeList"></exchange-list>
  </transition>

</article>
</div>
</template>
<script>
import historyList from './pointsHistory.vue';
import exchangeList from './pointsExchange.vue';
export default {
  components: {
    'history-list':   historyList,
    'exchange-list':  exchangeList
  },
  data(){
    return{
      flag2:true,
      titleArray:["积分明细","兑换记录"],
      isacitveid:0,
      newintegral:"",
      sixTotalIntegral:"",
      laver:"",
      historyList:[],
      exchangeList:[]
    }
  },
  beforeMount(){
    this.startGetData();
  },
  methods:{
   activated: function () {
     this.$setgoindex()
   },
   startGetData: function(){
     let user = localStorage.getItem('token');
     let Base64 = require('js-base64').Base64;
     if(user!=null){
       this.$axios.post('/api/user').then(res=>{
         if(res.status===200 && res.data!=''){
           let userList = res.data.data;
           for(let i=0;i<userList.length;i++){
             if(userList[i].mobile == Base64.decode(user)){
              this.newintegral=userList[i].integral;
              this.sixTotalIntegral = userList[i].sixTotal;
              this.laver = userList[i].grade;
              this.historyList = userList[i].pointsHistory;
              this.exchangeList = userList[i].pointsExchange 
            }
          }
        }
      })
     }
   },
   tabClik:function(index){
    this.isacitveid=index;
    if(this.isacitveid==index){
      this.flag2=!this.flag2;
    }

  }
}

}
</script>
<style scoped="scoped">
@import "../../assets/css/integral.css";
</style>
