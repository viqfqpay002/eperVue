<template>
  <div id="settings">
    <header class="header flex midcenter login_header">
      <h3 class="title flex rowflexbteew p30"><a href="javascript:;" class="icon js_go_history" @click="activated"> < </a> <p>Settings</p><span></span></h3>
    </header>
    <article>
      <a href="changePassword.html" class="link-change flex rowflexbteew midcenter"> <p>Change Password</p> <span class="icon"> > </span></a>
      <div class="p30">
        <a href="javascript:;" class="logout_btn" id="js_logout" @click="loginOut" >Logout</a>
      </div>
    </article>
  </div>
</template>

<script>
export default{
  name:"settings",
  data(){
    return{
    }
  },
  methods:{
   activated: function () {
     this.$setgoindex()
   },
   loginOut:function(){
     localStorage.clear();
     this.$router.push('/')
   }
 }
}
</script>
<style scoped="scoped">
@import "../../assets/css/settings.css";
</style>
