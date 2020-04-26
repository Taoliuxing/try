import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie'
import Test from '../views/Test'


Vue.use(VueRouter)

  const routes = [
  {
    path:'/movie',
    component:Movie
  },
  {
    path:'/test',
    component:Test
  }
 
]

const router = new VueRouter({
  routes
})

export default router
