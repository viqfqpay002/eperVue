export default{
	HOST:"http://192.168.1.151:8099/MarketAPI"
}

/*区分环境和接口服务器*/
let service= 'dev';
//let service='prod';
let api="";
if(service==="dev"){
	api="http://192.168.1.151:8099/MarketAPI/"
}else if(service==="prod"){
	api="http://service.epermarket.com/MarketAPI/"
}
