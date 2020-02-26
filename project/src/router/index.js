import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '../views/Home'
import Test from '../views/Test'
import End from '../views/End'
import Kid from '../views/Kid'
import Error from '../views/Error'

Vue.use(VueRouter)

const routes = [
  {
    // path: '/',
    component: Home,
    // redirect:'/home'
    path:'/home',
    alias:'/hhh'
  },
  {
    path: '/test',
    component:Test,
    children:[
      {
        path:'kid',
        component:Kid
      }
    ]
  },
  {
    path: '/end/:id/:name',
    name:"end",
    component:End
  },
  {
    path:'*',
    component:Error
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
