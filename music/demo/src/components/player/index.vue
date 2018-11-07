<template>
    <div class="player" v-show="this.playList.length>0">
       <div class="normal-play" v-show="fullScreen">
            <div class="background">
                 <img src="" alt="" width="100%" height="100%">
            </div>

            <div class="top">
                <div class="back">
                   <i class="icon-back"></i>
                </div>
                <h1 class="title"></h1>
                <h2 class="subtitle"><span></span></h2>
            </div>

            <div class="middle swiper-container">
              <div class="swiper-wrapper">
                 <div class="middle-l swiper-slide" ref="middleL">
                    <div class="cd-wrapper" ref="cdWrapper">
                      <div class="cd">
                        <img src="" alt="" class="image">
                      </div>
                    </div>

                    <div class="playing-lyric-wrapper">
                       <div class="playing-lyric"></div>
                    </div>
                 </div>

                 <!-- <scroll class="middle-r swiper-slide" ref="lyriclist">
                    <div class="lyric-wrapper">
                      <div>
                        <p ref="lyricLine" class="text"></p>
                      </div>
                    </div>
                 </scroll> -->
              </div>
            </div>
            <div class="bottom">
               <div class="dot-wrapper">
                 <span class="dot"></span>
               </div>

               <div class="progress-wrapper">
                  <span class="time time-l"></span>
                  <div class="progress-bar-wrapper">
                    <!-- <progressBar></progressBar> -->
                  </div>
                  <span class="time time-r"></span>
               </div>

               <div class="operators">
                  <div class="icon i-left">
                     <i></i>
                  </div>
                  <div class="icon i-left">
                     <i class="icon-prev"></i>
                  </div>
                  <div class="icon i-center">
                     <i></i>
                  </div>
                  <div class="icon i-right">
                     <i class="icon-next"></i>
                  </div>
                  <div class="icon i-right">
                     <i class="icon-not-favorite"></i>
                  </div>
               </div>
            </div>
       </div>

       <div class="small-play" v-show="!fullScreen"></div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
      ...mapGetters([
           'playing',
           'fullScreen',
           'playList',
           'currentSong',
           'currentIndex'
        ])
    }
}
</script>

<style lang="less">
  @import "~@/assets/less/index.less";
  .player{
        position: absolute;
        top:0;
        z-index: 150;
        width: 100%;
        height: 100%;
     .normal-play{
        height: 100%;
        background:@color-background;
     }
     .small-play{
        height: 10%;
        width: 100%;
        position: fixed;
        bottom: 0;
        background:@color-highlight-background;
     }
  }
  

</style>