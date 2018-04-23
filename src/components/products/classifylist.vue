<template>
   <div id="classifylist">
     <header class="header flex midcenter login_header">
       <h3 class="title flex rowflexbteew p30">
        <a href="javascript:;" class="icon js_go_history" @click="activated"> < </a>
        <p>{{title}}</p>
        <span class="icon iconfont icon-sousuo"></span>
        <span class="icon iconfont icon-tab"></span>
       </h3>
     </header>
       <article class="classifylist">
          
       </article>  
      </div>
</template>
<script>
  export default {
       name:"classifylist",
        data(){
            return{
               title:""
              
            }
        },
  created(){
      
  },
  beforeMount(){
    this.startData()
  },
  methods: {
      activated: function () {
                 this.$setgoindex()
                },
     startData: function(){
         let classilyId = this.$route.query.id;
         this.$axios.post('/api/categories',{"classilyId":classilyId}).then(res=>{
             if(res.status==200){
               res.data.navList.forEach((item,index)=>{
                  if(item.classilyId==classilyId){
                     this.title = item.navMsg
                  }
               });
                 res.data.menuList.forEach((item,index)=>{
                   item.classilyList.forEach((list,index)=> {
                      if(list.classilyId==classilyId){
                      this.title = list.title
                  }
                   });
                 
               })
             }
         })
              
         }
    }
}
</script>
<style scoped="scoped">

   </style>
