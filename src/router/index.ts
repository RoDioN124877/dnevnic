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
          path: 'users/:id-:name',
          name: 'user',
          props: true,
          component: () => import('@/views/UserView.vue'),
        },
        {
          path: 'users/add',
          name: 'userAdd',
          props: true,
          component: () => import('@/views/UserAddView.vue'),
        },
        {
          path: 'lessons',
          name: 'lessons',
          props: true,
          component: () => import('@/views/TasksView.vue')
        },
        {
          path: 'lesson:id-:title',
          name: 'lesson',
          props: true,
          component: () => import('@/views/LessonView.vue')
        },
        {
          path: 'lesson/add',
          name: 'lessonAdd',
          props: true,
          component: () => import('@/views/LessonAddView.vue'),
        },
      ]
    },

  ]
})

export default router
