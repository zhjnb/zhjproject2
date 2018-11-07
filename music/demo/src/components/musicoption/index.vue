<template>
	<div class="headeroption">
		<router-link to="/recommed">推荐</router-link>
		<router-link to="/singer">歌手</router-link>
		<router-link to="/ranking">排行</router-link>
		<router-link to="/search">搜索</router-link>
	</div>
</template>
<script>
	export default {

    }
</script>
<style lang="less">
	@import "~@/assets/less/variable.less";

	.headeroption{
	    
	    text-align: center;
	    padding-top: 0.3rem;
	    display: flex;
	    a{
	       font-size: 0.28rem;
	       flex:1;
	       line-height: 0.4rem;
	    }
	    a:hover{
	       color: @color-theme;
	    }
	    
	}

</style>