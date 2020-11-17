import Vue from 'vue'
import VueRouter from 'vue-router'

import signUp from '../views/signUp/signUp.vue'
import signIn from '../views/signIn/signIn.vue'
import signInClub from '../views/signIn/signInClub.vue'
import dashboard from '../views/dashboard/dashboard.vue'
import e404 from '../views/errorsHandler/errorsHandler.vue'
import playerProfile from '../views/player/playerProfile.vue'
import cvPlayer from '../views/player/cvPlayer.vue'
import clubProfile from '../views/clubProfile/clubProfile.vue'
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
    path: '/signInClub/',
    name: 'signInClub',
    component: signInClub
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '*',
    name: 'e404',
    component: e404
  },
  {
    path: '/playerProfile/:id',
    name: 'playerProfile',
    component: playerProfile
  },
  {
    path: '/cvPlayer/',
    name: 'cvPlayer',
    component: cvPlayer
  },
  {
    path: '/clubProfile/',
    name: 'clubProfile',
    component: clubProfile
  }
]

const router = new VueRouter({
  routes
})

export default router
