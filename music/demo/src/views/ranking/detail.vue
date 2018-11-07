<template>
    <transition name="slide">
       <musiclist :title="title" :bgUrl="bgUrl" :songList="songList" :isloading="isloading"></musiclist>
    </transition>
</template>

<script>

import Musiclist from "@/components/rankinglist"
import {getRankInfo} from "@/api"
export default {
      data(){
         return {
              title:"",
              bgUrl:"",
              songList:[],
              isloading:true
         }
      },
      created(){
          this.getRankInfoList()
      },
      methods:{

      getRankInfoList(){
        let id = this.$route.params.id
        getRankInfo(id).then(res => {
        console.log(res)
        this.title = res.topinfo.ListName;
        this.bgUrl = res.topinfo.pic;
        this.isloading=false;
        for(var i =0;i<res.songlist.length;i++){
            if(res.songlist[i].data.albumname=='未·LIVE'){
                  res.songlist[i].data.albumname = ''
            }else{
                res.songlist[i].data.albumname = res.songlist[i].data.albumname
            }
            this.songList.push({
                songname:res.songlist[i].data.songname,
                name:res.songlist[i].data.singer[0].name,
                albumname:res.songlist[i].data.albumname,
            })
        }
      })
    }

      
      },
      components:{
        Musiclist
      }
}
</script>
  
<style lang="less">
  @import "~@/assets/less/index.less";
  .slide-enter-active,.slide-leave-active{
    transition:all 0.3s;
  }
  .slide-enter,.slide-leave-to{
    transform:translate3d(100%,0,0);
  }
</style>