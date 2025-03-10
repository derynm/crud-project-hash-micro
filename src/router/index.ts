import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import EmployeeView from '@/pages/EmployeeView.vue'
import DetailEmployee from '@/pages/DetailEmployee.vue'
import CreateEmployeeView from '@/pages/CreateEmployeeView.vue'
import EditEmployeeView from '@/pages/EditEmployeeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/employee',
      name: 'employee',
      component: EmployeeView,
    },
    {
      path: '/employee/new',
      name: 'employee-create',
      component: CreateEmployeeView,
    },
    {
      path: '/employee/:id',
      name: 'employee-detail',
      component: DetailEmployee,
    },
    {
      path: '/employee/:id/edit',
      name: 'employee-edit',
      component: EditEmployeeView,
    },
  ],
})

export default router
