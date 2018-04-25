import axios from 'axios';
  export function fetch(options){
     return new Promise((resolve,reject)=>{
     	const  instance = axios.create({
        headers: {
    	'content-type': 'application/x-www-form-urlencoded'
         },
         timeout:30*1000
});
     	  instance(options).then(res=>{
     	  	  resolve(res)
     	  })
     	  .catch(error=>{
             console.log("请求信息异常:"+error)
             reject(error)
     	  })
     })
  }