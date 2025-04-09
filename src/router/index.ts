import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
    // component: HomeView,
    // meta: { transition: 'slide' }
  },
  {
    path: '/excel',
    name: 'excel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ExcelView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserLogin.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainPage.vue'),
    children: [
      // 默认子路由
      {
        path: '',
        redirect: { name: 'formula' }
      },
      // 公式页面
      {
        path: 'formula',
        name: 'formula',
        component: () => import('@/views/subpages/FormulaView.vue')
      },
      // 项目页面
      {
        path: 'projects',
        name: 'projects',
        component: () => import('@/views/subpages/Projects.vue')
      },
      // 最近公式
      {
        path: 'recent-formula',
        name: 'recent-formula',
        component: () => import('@/views/subpages/RecentFormula.vue')
      },
      // 模板社区
      {
        path: 'template-community',
        name: 'template-community',
        component: () => import('@/views/subpages/TemplateCommunity.vue')
      }
    ]
  }
  //仿照添加主页MainPage的router
  /*,
  {
    path: '/main',
    name: 'MainPage',
    component: () => import('../views/MainPage.vue')
  }*/
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
