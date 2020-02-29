import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie'
import Music from '../views/Music'
import Book from '../views/Book'
import Picture from '../views/Picture'
import MovieDetail from '../views/MovieDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path:'/movie',
    component:Movie
  },
  {
    path:'/music',
    component:Music
  },
  {
    path:'/book',
    component:Book
  },
  {
    path:'/picture',
    component:Picture
  },
  {
    path:'/movie-detail',
    component:MovieDetail
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
