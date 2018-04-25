import {fetch} from "./fetch";
import api from "./url";

export function userLogin(username,password){
	return fetch({
		url:api.HOST+"/CustomerApi.asmx/CheckLogin?UserName="+username+"&Password="+password+"&TempId=''&FromSite="+1+"&VerCode="+123456+"&LanguageId="+1,
		method:"get",
		params:{
          
		}
	}) 
}