import { createRouter, createWebHistory } from 'vue-router'
import plp from '@/views/plp.vue'
import pdp from '@/views/pdp.vue'

const routes = [
  {
    path: '/plp',
    name: 'ProductList',
    component: plp
  },
  {
    path: '/pdp/:id',
    name: 'ProductDetail',
    component: pdp,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
