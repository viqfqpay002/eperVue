<template>
  <div id="eperclub">
    <header class="header flex midcenter login_header">
      <h3 class="title flex rowflexbteew p30"><a href="javascript:;" class="icon js_go_history" @click="activated"> < </a> <p>EperClub Store</p><span></span></h3>
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
          <li class="item">
            <a href="javascript:;">
              <div class="img_box">
                <img src="../assets/img/eperClubimg.png" alt="img"/>
              </div>
              <p class="i_info flex rowflex">
                <span>[Product]:</span>Carambar, 'VeryBad Kids' Sour Soda Flavor1234564987888991
              </p>
              <p class="i_points">
                <span class="point">100000</span>
                Points
              </p>
              <button class="btn exchange">Exchange</button>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="img_box">
                <img src="../assets/img/eperClubimg.png" alt="img"/>
              </div>
              <p class="i_info">
                [Product]:<span class="info">Carambar, 'VeryBad Kids' Sour Soda Flavor...</span>
              </p>
              <p class="i_points">
                <span class="point">100000</span>
                Points
              </p>
              <button class="btn exchange no_check_btn" disabled="disabled">Out of stock</button>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="img_box">
                <img src="../assets/img/eperClubimg.png" alt="img"/>
              </div>
              <p class="i_info">
                [Product]:<span class="info">Carambar, 'VeryBad Kids' Sour Soda Flavor...</span>
              </p>
              <p class="i_points">
                <span class="point">100000</span>
                Points
              </p>
              <button class="btn exchange">Exchange</button>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="img_box">
                <img src="../assets/img/eperClubimg.png" alt="img"/>
              </div>
              <p class="i_info">
                [Product]:<span class="info">Carambar, 'VeryBad Kids' Sour Soda Flavor...</span>
              </p>
              <p class="i_points">
                <span class="point">100000</span>
                Points
              </p>
              <button class="btn exchange">Exchange</button>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="img_box">
                <img src="../assets/img/eperClubimg.png" alt="img"/>
              </div>
              <p class="i_info flex rowflex">
                <span>[Product]:</span>Carambar, 'VeryBad Kids' Sour Soda Flavor1234564987888991
              </p>
              <p class="i_points">
                <span class="point">100000</span>
                Points
              </p>
              <button class="btn exchange">Exchange</button>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="img_box">
                <img src="../assets/img/eperClubimg.png" alt="img"/>
              </div>
              <p class="i_info">
                [Product]:<span class="info">Carambar, 'VeryBad Kids' Sour Soda Flavor...</span>
              </p>
              <p class="i_points">
                <span class="point">100000</span>
                Points
              </p>
              <button class="btn exchange no_check_btn" disabled="disabled">Out of stock</button>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="img_box">
                <img src="../assets/img/eperClubimg.png" alt="img"/>
              </div>
              <p class="i_info">
                [Product]:<span class="info">Carambar, 'VeryBad Kids' Sour Soda Flavor...</span>
              </p>
              <p class="i_points">
                <span class="point">100000</span>
                Points
              </p>
              <button class="btn exchange">Exchange</button>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="img_box">
                <img src="../assets/img/eperClubimg.png" alt="img"/>
              </div>
              <p class="i_info">
                [Product]:<span class="info">Carambar, 'VeryBad Kids' Sour Soda Flavor...</span>
              </p>
              <p class="i_points">
                <span class="point">100000</span>
                Points
              </p>
              <button class="btn exchange">Exchange</button>
            </a>
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
      laver: ""
    }
  },
  beforeMount(){
    this.startGetData()

  },
  methods:{
    activated: function () {
     this.$setgoindex()
   },
   startGetData: function(){
    let user = localStorage.getItem('user');
    let Base64 = require('js-base64').Base64;
    if (user != null) {
      this.$axios.post('/api/user').then(res => {
        if (res.status === 200 && res.data != '') {
          let userList = res.data.data;
          for (let i = 0; i < userList.length; i++) {
            if (userList[i].mobile == Base64.decode(user)) {
              this.integral = userList[i].integral;
              this.laver = userList[i].grade;
            }
          }
        }
      })
    }
  }         
}
}

</script>
<style scoped="scoped">
@import "../assets/css/eperclub.css";
</style>
