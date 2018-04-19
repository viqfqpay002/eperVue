<template>
  <div id="pointsExchange">
    <table>
      <thead>
        <th>日期</th>
        <th>礼品</th>
        <th>积分</th>
        <th>状态</th>
      </thead>
      <tbody>
          <tr v-for="item in exchangeList">
             <td>{{item.date}}</td>
             <td>{{item.present}}</td>
             <td>{{item.integral}}</td>
             <td>{{item.state}}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default{
     props:['exchangeList'],
    data() {
      return {
      
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
