import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'users',
          name: 'users',
          component: () => import('@/views/UsersView.vue'),

        },
        {
          path: 'users/:id',
          name: 'user',
          props: true,
          component: () => import('@/views/UserView.vue'),
        },
        {
          path: 'tasks',
          name: 'tasks',
          props: true,
          component: () => import('@/views/TasksView.vue')
        },
      ]
    },

  ]
})

export default router
