import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayersView from '../views/PlayersView.vue'
import TeamSelectionView from '../views/TeamSelectionView.vue'
import CaptainsPickView from "../views/CaptainsPickView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/players/:playerType/:noOfCaptains',
      name: 'players',
      component: PlayersView,
    },
    {
      path: '/players/:playerType/:noOfPlayers/:playersPerTeam',
      name: 'auto',
      component: PlayersView,
    },
    {
      path: '/captains/pick/:noOfCaptains',
      name: 'captains-pick',
      component: CaptainsPickView,
    },
    {
      path: '/teams/view/:type/:playerPerTeam',
      name: 'team-selection',
      component: TeamSelectionView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
