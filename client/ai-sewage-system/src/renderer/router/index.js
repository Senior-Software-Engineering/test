import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'log',
      component: require('@/components/page/login').default
    },
    {
      path: '/main',
      name: 'vMain',
      redirect: '/map',
      component: require('@/components/common/main').default,
      children: [
        {
          path: '/map',
          name: 'vMap',
          component: require('@/components/page/map').default
        },
        {
          path: '/user_manage',
          name: 'user_manage',
          component: require('@/components/page/user_manage').default,
          menu: 'user'
        },
        {
          path: '/404',
          name: 'page404',
          component: require('@/components/page/404').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
