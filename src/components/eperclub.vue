<template>
  <div id="eperclub">
    <header class="header flex midcenter login_header">
      <h3 class="title flex rowflexbteew p30"><a href="javascript:;" class="icon js_go_history" @click="$setgoindex()"> < </a> <p>EperClub Store</p><span></span></h3>
    </header>
    <article class="eperClub_box" >
      <section class="eperClub_points flex rowflexbteew p30">
        <div class="eperClub_member flex cloumflex midcenter">
          <p class="m_stu">Memeber Stutas: <span>{{laver}}</span></p>
          <p class="m_pot">Available Points: <span>{{integral}}</span></p>
        </div>
        <div class="m_potins_btn">
          <router-link to="/integralList" class="btn go_p_h">My Points History</router-link>
          <router-link to="/integralList" class="btn go_e_h">Point Exchange History</router-link>
        </div>
      </section>
      <section class="eperClub_banner flex midcenter">
        <a href="javascript:;">
          <h2>EperClub Benefits</h2>
          Click to learn more >>
        </a>
      </section>
      <section class="eperClub_list">
        <ul class="eperClub_list_ul flex rowflex">
          <li class="item" v-for="item in integgoods">
            <router-link :to="{name:'detail',params:{'id':item.id}}">
              <div class="img_box">
                <img :src="item.inteImg" alt="item.id"/>
              </div>
              <p class="i_info flex rowflex">
                <span>[Product]:</span>{{item.intetitle}}
              </p>
              <p class="i_points">
                <span class="point">{{item.point}}</span>
                Points
              </p>
              <button :class="['btn','exchange',{'no_check_btn':item.self>0?'':'no_check_btn'}]">Exchange</button>
            </router-link>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>


<script>
export default{
  name: "eperclub",
  data(){
    return {
      integral: "",
      laver: "",
      integgoods:[]
    }
  },
  beforeMount(){
    this.startGetData()

  },
  methods:{
   startGetData: function(){
    let user = localStorage.getItem('token');
    let Base64 = require('js-base64').Base64;
    if (user === null||user=== 0) {
         this.$router.push("/login"); return false;
      };
      //获取用户信息
     this.$axios.post('/api/user').then(res => {
        if (res.status == 200 && res.data != '') {
          res.data.data.forEach((item,index)=>{
            if (item.mobile == Base64.decode(user)) {
              this.integral = item.integral;
              this.laver = item.grade;   
              }  
          })
          }
        
    });
     //获取goodslist
  this.$axios.get('/api/eperbox').then(res=>{
     if(res.status === 200){
       this.integgoods=res.data.data;
     }
  })        
}
}
}

</script>
<style scoped="scoped">
@import "../assets/css/eperclub.css";
</style>
