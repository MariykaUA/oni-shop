import { createRouter, createWebHistory} from 'vue-router';
import Home from '../pages/Home.vue';
import CarTypes from '../pages/CarTypes.vue';

const routes = [
 {
        path: '/',
        name: 'Home',
        component: Home,
  },
  {
    path: '/car-types',
    name: 'CarTypes',
    component: CarTypes,
  },
];  

const router = createRouter({
  history: createWebHistory(),
    routes,
});

export default router;