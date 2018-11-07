<template>
  <div id="app">
     <musicheader></musicheader>
     <headeroption></headeroption>
     <router-view></router-view>
     <player></player>
  </div>
</template>

<script>
import Musicheader from "@/components/musicheader";
import Headeroption from "@/components/musicoption";
import Player from "@/components/player";
export default {
  components:{
       Musicheader,
       Headeroption,
       Player
  }
}
</script>

<style lang="less">
  @import "~@/assets/less/index.less";
</style>
