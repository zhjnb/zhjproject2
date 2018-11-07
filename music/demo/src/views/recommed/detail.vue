<template>
    <transition name="slide">
       <musiclist :title="title" :bgUrl="bgUrl" :songList="songList" :isloading="isloading"></musiclist>
    </transition>
</template>

<script>

import Musiclist from '@/components/musiclist'
import {getCdInfo} from "@/api"
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
          this.getCdInfor()
      },
      methods:{
         getCdInfor:function () {
            getCdInfo().then(res=>{
              console.log(res)
              this.isloading=false
              this.title=res.data.cdlist[0].dissname
              this.bgUrl=res.data.cdlist[0].logo
              this.songList=this.editSongs(res.data.cdlist[0].songlist)
            })
         },
         editSongs(list){
            let nSongList=[];
            for (let i = 0; i < list.length; i++) {
                let item ={
                  id:list[i].songid,
                  mid:list[i].songmid,
                  name:list[i].songname,
                  album:list[i].albumname,
                  interval:list[i].interval,
                   
                  img:`https://y.gtimg.cn/music/photo_new/T002R300x300M000${list[i].albummid}.jpg?max_age=2592000`,
          
                  url:`http://dl.stream.qqmusic.qq.com/C400${list[i].songmid}/${list[i].songid}.m4a?guid=983915916&fromtag=66`,
          
                  singer:list[i].singer
                }
                nSongList.push(item)
            }
            return nSongList
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