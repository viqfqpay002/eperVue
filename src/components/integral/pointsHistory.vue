<template>
   <div id="pointsHistory">
       <table>
            <thead>
              <th>积分日期</th>
              <th>来源</th>
              <th>积分</th>
            </thead>
            <tbody>
               <tr v-for="item in historyList">
                  <td>{{item.date}}</td>
                  <td>{{item.msg}}</td>
                  <td>{{item.integral}}</td>
               </tr>
            </tbody>
       </table>
   </div>
</template>
<script>
   export default{
    props:['historyList'],
     data (){
       return{

       }
     }
   }
</script>
<style scoped="scoped">
 table{
    width: 100%;
    font-size: 0.32rem;
    line-height: 0.64rem

 }
table thead{
   background: #f2f2f2;
 }

 table th{
  border: none
 }
</style>