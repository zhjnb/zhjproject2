<template>
  <div class="search">
      <div class="searchboxall">
        <i class="icon-search" @click="getSearch"></i>
        <input type="text" class="searchbox" placeholder="搜索" ref="searchbox" @blur="showoff"></input>
      </div>
      <searchlist :name="names" v-show="isShow"></searchlist>

      <scroll class="searchscroll">
        <div>
         <ul class="searchsmall">
      	   <li v-for="item in hotSearch">{{item.k}}</li>
         </ul>
        </div>
      </scroll> 

      <div class="loading-container" v-show="isloading">
    	<loading></loading>
      </div>
  </div>
</template>

<script>
  import Scroll from "@/components/bscroll"
  import Loading from '@/components/loading'
  import Searchlist from '@/components/searchList'
  import axios from "axios"
  import {getHotKey} from "@/api"
  import {search} from "@/api"
export default {
	data(){
		return {
		   hotSearch:[],
		   isloading:true,
		   isShow:false,
		   names:[]
		}
	},
	created(){
       this.getHotKeyfor()
	},
	methods:{
		showoff(){
		   this.isShow=false
		},
	    getHotKeyfor(){
	        getHotKey().then((res)=>{
	        	this.hotSearch=[]
	        	this.isloading=false
	        	if (res.data.hotkey.length<=10) {
	        		this.hotSearch=res.data.hotkey
	        	}else{
	        	    for (var i = 0; i < 10; i++) {
	        	    	this.hotSearch.push(res.data.hotkey[i])
	        	    }
	        	}	        	
	        })
	    },
	    getSearch(){
	    	this.isShow=true
	    	this.names=[]
           var keyword=this.$refs.searchbox.value
           search(keyword).then((res)=>{
           	 if (res.data.song.list.length<=10) {
           	 	for (var i = 0; i < res.data.song.list.length; i++) {
              	this.names.push({singername:res.data.song.list[i].singer[0].name,
              	     album:res.data.song.list[i].album.name})
              	
               }
           	 }else{
           	   for (var i = 0; i < 10; i++) {
              	this.names.push({singername:res.data.song.list[i].singer[0].name,
              	     album:res.data.song.list[i].album.name})
              	
              }
           	 }
              
           })

	    }
	},
    components:{
       Scroll,
       Loading,
       Searchlist
    }
}
</script>

<style lang="less">
    @import "~@/assets/less/index.less";
   .search{
      height: 100%;
      text-align: center;
      .searchboxall{
      	position: relative;
      	height: 1.02rem;
      }
      .searchscroll{
        width: 100%;
        position: fixed;
        top:3rem;
        
        bottom: 0;
        text-align: center;
      }
      .searchbox{
      	display: inline-block;
      	text-indent: 0.7rem;
      	 font-size: 0.36rem;
      	 width: 80%;
      	 height: 0.6rem;
      	 outline: none;
      	 border: none;
      	 border-radius: 0.1rem;
      	 background: @color-dialog-background;
      	 color:@color-text-d;
      }
      i{
        font-size: 0.6rem;
        color: @color-text-d;
        position: absolute;
        bottom:0;
      }
      .searchsmall{
        width: 80%;
        display: inline-block;
        line-height: 0.5rem;
        text-align: left;
        li{
           display:inline-block;
           padding: 0 0.2rem; 
           border-radius: 0.1rem;
           margin-right: 0.15rem;
           font-size: 0.3rem;
           background: @color-text-d;
           text-align: center;
           color: @color-text-d;
        }
      }
   }
</style>