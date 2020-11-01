import Vue from 'vue'
import VueRouter from 'vue-router'

import signUp from '../views/signUp/signUp.vue'
import signIn from '../views/signIn/signIn.vue'
import e404 from '../views/errorsHandler/errorsHandler.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: signIn
  },
  {
    path: '*',
    name: 'e404',
    component: e404
  }
]

const router = new VueRouter({
  routes
})

export default router
