/**
 * Created by user on 2018/4/2.
 */
import Vue from 'vue';
import VeeValidate,{Validator} from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_CN';
Validator.localize(zh);
const config = {
  locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

let dictionary = {
  zh_CN: {
    messages: {
      password:() =>"密码格式不正确",
      required: ( field )=> "请输入" + field
    },
    attributes:{
      email:'邮箱',
      password:'密码',
      name: '账号',
      phone: '手机号码',
      ver:'验证码',
      conPassword:'设置的密码'
    }
  }
};
Validator.localize(dictionary);

Validator.extend('phone', {
  getMessage: field => "请输入正确的手机号码",
  validate: value => value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
});
Validator.extend('password', {
  getMessage: field => "请输入6位以上包含数字与字母的密码",
  validate: value => value.length >=6 /*&&  /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g.test(value)*/
});
Validator.extend('ver', {
  getMessage: field => "请输入6位短信验证码",
  validate: value => value.length==6 && /^[0-9]*$/g.test(value)
});


