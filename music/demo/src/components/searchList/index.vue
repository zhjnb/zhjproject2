<template>
   <div class="searchLists">
     <scroll class="searchscroll1">
       <div>
         <ul>
           <li v-for="(item) in name"><span>{{item.singername}}</span>{{item.album}}</li>
         </ul>
       </div>
    </scroll>
   </div>

</template>

<script>
import Scroll from "@/components/bscroll"
import Loading from '@/components/loading'
export default {

  props:{
    name:{
      type:Array,
      default:[]
    }
    
  },
  components:{
    Scroll,
    Loading
  }
}
</script>

<style lang="less">
  @import "~@/assets/less/index.less";
  .searchLists{
    width: 82%;
    height: 100%;
    margin: 0 9%;
    position: fixed;
    z-index: 200;
    .searchscroll1{
      position: fixed;
      top:2.72rem;
      bottom: 0;
      width: 82%;
      ul{
       border-radius: 0.3rem;
       overflow: hidden;
      }
      li{
        text-align: left;
        padding: 0.09rem 0;
        font-size: 0.35rem;
        background: @color-highlight-background;
        color: @color-text-l;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        span{
          padding: 0 0.7rem;
        }
      }
    }

  }
</style>