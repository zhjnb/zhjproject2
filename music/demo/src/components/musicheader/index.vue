<template>
  <div class="header">
     <div class="headlogo"></div>
     <h2 class="headtext">鸿槿云音乐</h2>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
   @import "~@/assets/less/variable.less";
   .header{
      height: 1rem;
      color: @color-theme;
      display: flex;
      justify-content:center;
      align-items:center;
   }
   .headtext{
   	  padding-top:0.2rem; 
   	  padding-left:0.2rem; 
      font-size: 0.5rem;
   }
   .headlogo{
   	  height: 1rem;
   	  width: 1rem;
      background: url("logo.png");
      background-size: 100% 100%;
   }
</style>
