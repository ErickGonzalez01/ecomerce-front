import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'

import PaginaDeInicio from "../views/PaginaDeInicio.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PaginaDeInicio',
    component: PaginaDeInicio
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:"/inicio",
    name:"InicioComerce",
    component: () => import("../views/InicioComerce.vue")
  },
  {
    path:"/perfil",
    name:"PerfilView",
    component:()=>import("../views/PerfilView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
