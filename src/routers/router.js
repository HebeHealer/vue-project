import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉路由地址的#
  routes: [
    {
      path: '/',  // 默认进入路由[写在第一个]
      redirect: '/home' //重定向
    },
    {
      path: '/home',
      name: 'index',
      component: resolve => require(['../views'], resolve)
    },
    {
      path: 'partOne',
      name: 'partOne',
      component: resolve => require(['../views/partOne'], resolve),
      children: [
        {
          path: '/home',
          name: 'home',
          component: resolve => require(['../views/partOne/home'], resolve)
        },
        {
          path: '/operation',
          name: 'operation',
          component: resolve => require(['../views/partOne/operation'], resolve)
        }
      ]
    }
  ]
})
