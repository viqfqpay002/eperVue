<template>
  <div id="login">
    <header class="header flex midcenter login_header">
      <h3 class="title flex rowflexbteew p30"><a href="javascript:;" class="icon js_go_history" @click="activated"> < </a> <p>Login</p><span></span></h3>
    </header>
    <article class="p40 login_center">
      <section class="form_box">
        <div class="input_group username_box">
         <input type="text" class="username"  v-validate="'required|phone'" :class="{'input': true, 'is-danger': errors.has('phone') }" name="phone" placeholder="Phone number/Email/User name"  v-model="phone"/>
         <span class="errinfo" v-show="errors.has('phone')" v-cloak>{{ errors.first('phone') }}</span>
       </div>
       <div class="input_group password_box">
        <input type="password" class="password" v-validate="'required|password'" placeholder="Password" name="password" :class="{'input': true, 'is-danger': errors.has('password') }" v-model="password"/>
        <span class="errinfo" v-show="errors.has('password')" v-cloak>{{errors.first('password')}}</span>
      </div>
      <span class="errinfo">{{error}}</span>
      <button type="button" class="submit btn" @click="loginSubmit">Login</button>
    </section>
    <!--  <a href="fogetpassword.html" class="user_forget">Forgot your passwrod?</a>-->
    <a href="javascript:;" class="user_img">
      <img src="" alt="img" title="userimg"/>
    </a>
  </article>
  <div class="footer user_footer">
    <router-link to="/register" class="go_register">Register <span class="icon"></span> </router-link>
  </div>
</div>
</template>
<script>
import {userLogin} from '../axios/api';
import md5 from 'js-md5'
export default {
  name: 'login',
  data () {
    return {
      phone: "",
      password: "",
      error:""
    }
  },
  methods: {
    activated: function () {
     this.$setgoindex()
   },
   loginSubmit: function () {
    if (this.phone !== "" && this.password !== "") {
      this.$validator.validateAll().then((result)=>{
       if(result){
         // userLogin(this.phone,md5(this.password)).then(res=>{
         //     if(res.status===200){
         //         if(this.phone===res.data.data.ComMobile){
         //              this.$router.push({path:"/"});
         //             let Base64 = require('js-base64').Base64;
         //             let uid= Base64.encode(this.phone);
         //              localStorage.setItem("token",uid);
         //              localStorage.setItem("usp",md5(this.password));
         //              if(res.data.status==="1"){
         //                 localStorage.setItem("status",res.data.status);
         //              }else {
         //                 localStorage.setItem("status",0);
         //              }
         //         }else {
         //              this.error="此手机号码未被注册!!"
         //         }
               
         //     }
              
         // })
         this.$axios.post('/api/user', {phone: this.phone, password: this.password}).then(res => {
           for(let i=0;i<res.data.data.length;i++){
             if(this.phone === res.data.data[i].mobile && this.password === res.data.data[i].password){
               let Base64 = require('js-base64').Base64;
               let uid= Base64.encode(this.phone);
               this.$router.push('/');
               localStorage.setItem("token",uid);
             }else {
               this.error="请确认您的手机号与密码"
             }
           }
         }
         ).catch(res=>{
           console.log(res.msg)
         })
        }
     });

    }
  }
}
}

</script>
<style lang="css" scoped="scoped">
@import "../assets/css/form.css";
</style>
