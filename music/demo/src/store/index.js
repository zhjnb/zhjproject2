import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
       playList:[],
       fullScreen:false,
       playing:true,
       currentIndex:-1
    },
    getters:{
    	playList:state=>state.playList,
    	fullScreen:state=>state.fullScreen,
    	playing:state=>state.playing,
    	currentIndex:state=>state.currentIndex,
    	currentSong:(state)=>{
    		return state.playList[this.currentIndex]
    	}
    },
    mutations:{
    	changeplayList(state,playList){
            state.playList=playList
    	},
    	changefullScreen(state,fullScreen){
            state.fullScreen=fullScreen
    	},
    	changeplaying(state,playing){
            state.playing=playing
    	},
    	changecurrentIndex(state,currentIndex){
            state.currentIndex=currentIndex
    	},
    },
    actions:{
        addPlayer({commit},{list,index}){
        	commit('changeplayList',list)
        	commit('changefullScreen',true)
        	commit('changeplaying',true)
        	commit('changecurrentIndex',index)
        }
    }
})