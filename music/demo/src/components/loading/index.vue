<template>
    <div class="loading">
    	<img src="./loading.gif" alt="">
    	<p class="desc">{{title}}</p>
    </div>
</template>
<script>
	export default {
         name:"loading",
         props:{
             title:{
                type:String,
                default:'加载中...'
             }
         }
    }
</script>
<style lang="less">
    @import "~@/assets/less/variable.less";
    .loading{
    	position: absolute;
    	z-index: 2;
        width: 100%;
        text-align: center;
        margin-top: 40%;
        img{
          width: 3rem;
          height: 3rem;
        }
        .desc{
           line-height: 0.2rem;
           font-size: 0.12rem;
           color:@color-text-l;
        }
    }

</style>