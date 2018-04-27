<template>
   <div id="register">
     <header class="header flex midcenter login_header">
       <h3 class="title flex rowflexbteew p30"><a href="javascript:;" class="icon js_go_history" @click="activated"> < </a> <p>Register</p><span></span></h3>
     </header>
     <article class="p40 login_center">
       <section class="form_box">
        <!-- username -->
         <div class="input_group username_box">
           <input type="text" class="username" v-validate="'required|phone'"  :class="{'input': true, 'is-danger': errors.has('phone') }"  placeholder="Mobile Phone" name="phone" v-model="phone"/>
           <span class="errinfo" v-show="errors.has('phone')" v-cloak>{{ errors.first('phone') }}
           </span>
         </div>
         <!-- ver -->
         <div class="input_group vertification_box">
           <input type="text" class="phonCode" v-validate="'required|ver'" placeholder="Vertification code" :class="{'input':true,'is-danger':errors.has('ver')}" name="ver" v-model="ver"/>
           <button type="button" class="ver_btn" v-bind:disabled="sendflag"  @click="sendClik">{{time}}</button>
           <span v-if="errorflag" class="errinfo"  v-show="errors.has('ver')" v-cloak>{{ errors.first('ver') }}</span>
           <span v-else class="errinfo">{{vererror}}<!-- <router-link to="login">请前去登录</router-link> --></span>
         </div>

         <!-- password -->
         <div class="input_group password_box">
           <input type="password" class="password" v-validate="'required|password'" name="password" placeholder="Login password" :class="{'input': true, 'is-danger': errors.has('password') }"  v-model="password"/>
           <span class="errinfo" v-show="errors.has('password')" v-cloak>{{errors.first('password')}}</span>
         </div>
         <!--conPassword  -->
         <div class="input_group con_password_box">
           <input type="password" class="confirm_password" v-validate="'required|confirmed:password'"placeholder="Confirm Your password" name="conPassword" v-model="conPassword"/>
           <span class="errinfo" v-show="errors.has('conPassword')" v-cloak>{{errors.first('conPassword')}}</span>
         </div>

         <div class="checked_box">
           <input type="checkbox" class="checkd" checked="checked" />
           <a href="javascript:;" class="checkd_info">
             I have read and understand the User Agreement
           </a>
           <p class="tel_msg">Please contact Customer Service with any questions：400-7760-776</p>
         </div>
         <!-- submit -->
         <div class="submit_box">
         <span class="errinfo">{{error}}</span>
         <button type="button" class="submit btn reg_btn" id= "reg_btn" @click="registerSubmit">Register</button>
       </div>
       </section>
       <a href="javascript:;" class="user_img">
         <img src="" alt="img" title="userimg"/>
       </a>

     </article>
   </div>
</template>
<script>
   export default {
     name: 'register',
     data () {
         return{
           time:"Send",
           phone: "",
           password: "",
           error:"",
           conPassword:"",
           ver:"",
           vererror:"",
           errorflag:true,
           startSend:60,
           sendflag:false
         }
     },
      methods: {
          activated: function () {
     this.$setgoindex()
   },
        sendClik: function(){
          if(this.phone!==""){
             this.errorflag=true;
             this.vererror=""
          let timer = setInterval(()=>{
                 this.startSend--;
                 if(this.startSend<=0){
                   this.time = "Send",
                   clearInterval(timer)
           }else {
                this.sendflag=true;
                this.time =this.startSend+"秒后重新发送"
           }
           },1000);
         
         }else{
            this.errorflag=false;
            this.vererror="请先填写手机号码"
         }
         
        },
        registerSubmit: function () {
          if ([this.phone,this.password,this.ver,this.conPassword]!=="") {
            this.$validator.validateAll().then((result)=>{
                     if(result){
                       this.$axios.post('/api/user', {mobile: this.phone}).then(res => {
                           for(let i=0;i<res.data.data.length;i++){
                             if(this.phone === res.data.data[i].mobile){
                                this.error="该用户已被注册"; return false
                             }
                           }
                            res.data.data.push({
                                mobile:this.phone,
                                password:this.password
                              })
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
