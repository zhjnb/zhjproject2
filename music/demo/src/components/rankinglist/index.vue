<template>
  <div class="music-list">
    	 <div class="back" @click="back">
    	 	<i class="icon-back"></i>
    	 </div>
    

    <h1 class="title" ref="bgText">{{title}}</h1>
    <div class="bg-image" ref="bgImage" :style="bgImg">
         <div class="play-wrapper">
            <div ref="playBtn" class="play">
                <i class="icon-play"></i>
                <span class="text">随机播放全部</span>
            </div>
         </div>
    </div>

    <div class="bg-layer" ref="layer"></div>

    <scroll ref="scroll" class="list" @scroll="scroll" :listenScroll=true :probeType=3>
    	<div class="song-list-wrapper">
    		<div class="song-list">
    			<ul>
    				<li class="item" v-for="(item,index) in songList" :key="item.key">
    					<div class="rank">
    						<span class="text">{{index+1}}</span>
    					</div>
    					<div class="content">
    						<h2 class="name">{{item.songname}}</h2>

    						<p class="desc"><span>{{item.name}} </span>{{item.albumname}}</p>
    						
    					</div>
    				</li>
    			</ul>
    		</div>
    	</div>
    </scroll>
    <div class="loading-container" v-show="isloading">
    	<loading></loading>
    </div>
   </div>
</template>

<script>
import Scroll from '@/components/bscroll'
import Loading from '@/components/loading'

export default {
     props:{
     	songList:{
     		type:Array,
     		default:[]
     	},
     	bgUrl:{
     		type:String,
     		default:""
     	},
     	title:{
     		type:String,
     		default:""
     	},
     	isloading:{
     	    type:Boolean,
     		default:true
     	}
     },
     data(){
        return {
        	 scrollY:0
        }
     },
     mounted(){
     	this.txHeight=this.$refs.bgText.offsetHeight
     	this.bgHeight=this.$refs.bgImage.offsetHeight
     	this.ty=-this.bgHeight+this.txHeight
     	this.$refs.scroll.$el.style.top=`${this.bgHeight}px`
     },
     methods:{
        scroll(pos){
        	this.scrollY=pos.y
        	// console.log(pos.y)
        },
        back(){
        	this.$router.back()
        }
     },
     computed:{
        bgImg(){
        	return `background-image:url(${this.bgUrl})`
        }
     },
     components:{
        Scroll,
        Loading
     },
     watch:{
        scrollY(v){
            let translateY = Math.max(this.ty,v)
            let scale=1
            let zIndex=0
            const percent=Math.abs(v/this.bgHeight)
            if (v>0) {
            	scale=1+percent
            	zIndex=10
            }
            this.$refs.layer.style.transform=`translate3d(0,${translateY}px,0)`
            if (v<this.ty) {
            	zIndex=10
            	this.$refs.bgImage.style.paddingTop=0
            	this.$refs.bgImage.style.height=this.$refs.bgText.offsetHeight+"px"
            	this.$refs.playBtn.style.display="none";
            }else{
            	this.$refs.bgImage.style.paddingTop="4.5rem"
            	this.$refs.bgImage.style.height=0
            	this.$refs.playBtn.style.display="flex"
            }
            console.log(scale)
            this.$refs.bgImage.style.transform=`scale(${scale})`
            this.$refs.bgImage.style.zIndex=zIndex
        }
     }
}
</script>

<style lang="less">
  @import "~@/assets/less/variable.less";
  .title{
  	 padding: 0.2rem 0;
  	 position: absolute;
  	 z-index: 49;
  	 width: 100%;
  	 text-align: center;
  	 font-size: 0.48rem;
  }
  .music-list{
     position: fixed;
     z-index: 100;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
     background: @color-background;
     .back{
     	position: absolute;
     	top: 0;
        z-index: 50;
        .icon-back{
        	display: block;
        	padding: 0.2rem;
        	font-size: 0.45rem;
        	color: @color-theme;
        }
     }
        .bg-image{
        	position: relative;
        	width: 100%;
        	height: 0;
        	padding-top:4.5rem;
        	transform-origin:top;
        	background-size: cover;
        	.play-wrapper{
        		position: absolute;
        		bottom: 0.2rem;
        		z-index: 50;
        		width: 100%;
        		.play{
        		    box-sizing:border-box;
        		    width: 3rem;
        		    padding: 0.15rem 0;
        		    margin: 0 auto;
        		    border:1px solid @color-theme;
        		    color:@color-theme;
        		    border-radius: 100px;
        		    font-size: 0.3rem;
                    display: flex;
                    justify-content:center;
                    align-items:center;
        		    .icon-play{
        		        padding-right: 0.1rem;
        		        font-size: 0.35rem;
        		    }
        		}
        		.filter{
        			position: absolute;
        			top: 0;
        			left: 0;
        			width: 100%;
        			height: 100%;
        			background: rgba(7,17,27,0.4);
        		}
        	}
        }
        .bg-layer{
        	position: relative;
        	height: 100%;
        	background: @color-background;
        }
        .list{
            position: fixed;
            top: 4.5rem;
            bottom: 0;
            width: 100%;
            background: @color-background;
            transition:all 0.5s;
            .song-list-wrapper{
                padding: 10px 20px;
            }
        }
        .loading-container{
        	position: absolute;
        	width: 100%;
        	top:50%;
        	transform:translateY(-50%);
        	height: 100%;
        	z-index: 99;
        	background: #222;
        }
        .song-list{
            .item{
                display: flex;
                align-items:center;
                box-sizing:border-box;
                height: 64px;
                font-size: @font-size-medium;
                .rank{
                    flex:0 0 25px;
                    width: 25px;
                    margin-right: 20px;
                    text-align: center;
                    .text{
                    	color: @color-theme;
                    	font-size: @font-size-large;
                    }
                }
                .content{
                    flex:1;
                    line-height: 20px;
                    overflow: hidden;
                    .name{
                    	color: @color-text;
                    }
                    .desc{
                    	margin-top: 4px;
                    	color: @color-text-d;
                    }
                }
            }
        }
     }
  
</style>