import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Singer from '@/views/singer'
import Ranking from '@/views/ranking'
import Search from '@/views/search'
import Recommed from '@/views/recommed'
import Recommedetail from '@/views/recommed/detail'
import Singerdetail from '@/views/singer/detail'
import Rankingdetail from '@/views/ranking/detail'



Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/singer',
      component: Singer,
      children:[
          {
            path:'/singer/:id',
            component:Singerdetail
          }
      ]
    },
    {
      path: '/',
      component: Recommed
    },
    {
      path: '/ranking',
      component: Ranking,
      children:[
          {
            path:'/ranking/:id',
            component:Rankingdetail
          }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/recommed',
      component: Recommed,
      children:[
          {
            path:'/recommed/:id',
            component:Recommedetail
          }
      ]
    },

  ]
})
