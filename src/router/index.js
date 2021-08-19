import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../components/MovieDetail.vue'
import Actors from '../components/Actors.vue'
import ActorDetail from '../components/ActorDetail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/movie/:id",
    name: 'Home',
    component: MovieDetail
  },
  {
    path:"/actors",
    name:"actors",
    component: Actors,
  },
  {
    path: "/actor/:id",
    name:"actor",
    component: ActorDetail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
