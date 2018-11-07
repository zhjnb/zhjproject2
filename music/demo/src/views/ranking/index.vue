<template>
    <div class="ranking">

     <bscroll class="ranking-content">
         <div>
             <div class="ranking-thing" v-for="item in toplist" @click="detail(item.id)">
             	<img :src="item.picUrl" alt="">
             	<div class="ranking-text">
             	    <p v-for="(text,index) in item.songList"><span>{{index+1}}</span>{{text.singername}}<span>{{text.songname}}</span></p>
             	</div> 
             </div>
             
             <div class="loading-container" v-show="isloading">
     	        <loading></loading>
             </div>
         </div>
     </bscroll>
     <router-view></router-view>

  </div>
</template>

<script>

import axios from "axios"
import {getRankList} from "@/api"
import Bscroll from '@/components/bscroll'
import Loading from '@/components/loading'

export default {
  data(){
    return{
        toplist:[],
        isloading:true
    }
  },
  created(){
    this.getDetail()
  },
  methods:{
     getDetail:function () {
     	getRankList().then((res)=>{
              this.isloading=false
     		  this.toplist=res.data.topList
     		  
     	})
     },
     detail:function (id) {
    		this.$router.push({path:`/ranking/${id}`})
     }
  },
  components:{
  	 Bscroll,
  	 Loading
  }
}
</script>

<style lang="less">
@import "~@/assets/less/variable.less";
   .ranking-content{
      position: fixed;
      top:1.7rem;
      bottom: 0;
      width: 100%;
      overflow: hidden;
      .ranking-thing{
      	 padding: 0.5rem;
      	 display: flex;
      	 justify-content:space-between;
      	 img{
      	 	display: block;
      	    width: 2rem;
      	    height: 2rem;
      	 }
      	 .ranking-text{
      	 	display: flex;
      	 	flex-direction:column;
      	 	justify-content:space-around;
      	 	background: @color-highlight-background;
      	 	width: 100%;
      	 	p{
      	 	  width: 4rem;
      	 	  font-size: 0.32rem;
      	 	  text-overflow:ellipsis;
              white-space: nowrap;
              overflow: hidden;
              padding-left: 0.2rem;
              color: @color-text-l;        
              span{
                padding-left: 0.3rem;
              }
              span:nth-child(1){
                padding-right:0.2rem;
                padding-left:0;
              }
      	 	}
      	 }
      }
   }
</style>