<template>
  <div class="recommed">

     <bscroll class="recommend-content">
             <div>
                 <div class="swiper-container banner">
                 	  <div class="swiper-wrapper">
                 	  	 <div class="swiper-slide" v-for="item in slider" :key="item.key">
                 	  	 	<img :src="item.picUrl" alt="" class="slideimg">
                 	  	 </div>
                 	  </div>
                 	  <div class="swiper-pagination">
                 	  </div>
                 </div>
                 <div class="recommed-list">
             	     <h3 class="list-title">热门歌单推荐</h3>
             	     <ul>
             	     <li class="item" v-for="item in list" :key="item.key" @click="detail(item.id)">
             	     	<div>
             	     		<img :src="item.picUrl" alt="" class="listimg">
             	     	</div>
             	     	<div class="text">
             	     	    <h2 class="name">{{item.songListAuthor}}</h2>
             	     	    <p class="desc">{{item.songListDesc}}</p>
             	     	</div>
             	     </li>
             	     </ul>
                 </div>
   
             </div>
             
             
             <div class="loading-container" v-show="isloading">
     	        <loading></loading>
             </div>
     </bscroll>
     <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios"
import {getRecommend} from "@/api"
import Bscroll from '@/components/bscroll'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import Loading from '@/components/loading'

export default {
	data(){
	  return{
	  	 slider:[],
	  	 list:[],
	  	 isloading:true	  
	  	}
	},
    created(){
        this.getslide()
    },
    components:{
        Bscroll,
        Loading
    },
    methods:{
    	getslide:function () {
    		getRecommend().then((res)=>{
                 console.log(res)
                 this.slider=res.data.slider
                 this.list=res.data.songList
                 this.isloading=false
                 this.$nextTick(() => {
                    var banner=new Swiper('.banner',{
                 	    observer:true,
                 	    observerParents:true,
                 	    pagination: {
                          el: '.swiper-pagination',
                        },
                        loop : true,
                        autoplay:true
                    })
                 })
    		})
    	},
    	detail:function (id) {
    		this.$router.push({path:`/recommed/${id}`})
    	}

    },
    
}
</script>

<style lang="less">
   @import "~@/assets/less/variable.less";
   .slideimg{
      width: 100%;   	
   }
  .recommend-content{
      position: fixed;
      top:1.7rem;
      bottom: 0;
      width: 100%;
      overflow: hidden;
   }
  .listimg{
      width: 0.6rem;
      height: 0.6rem;
  }
  .recommed-list{
  	 h3{
  	 	line-height: 1rem;
        text-align: center;
        font-size: 0.35rem;
        color: @color-theme;
  	 }
  	 li{
  	     display: flex;
         height: 1.55rem;
         
         img{
            width: 1.25rem;
            height: 1.25rem;
            padding-left:0.4rem; 
         }
         .text{
            padding-left: 0.35rem;
         }
         h2{
            font-size: 0.3rem;
            line-height: 0.3rem;
            color: @color-text;
            padding: 0.3rem 0 0.25rem 0
         }
         p{
            font-size: 0.25rem;
            color: @color-text-d;

         }
  	 }
  }

</style>