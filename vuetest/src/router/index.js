import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie'


Vue.use(VueRouter)

  const routes = [
  {
    path:'/movie',
    component:Movie
  }
 
]

const router = new VueRouter({
  routes
})

export default router
