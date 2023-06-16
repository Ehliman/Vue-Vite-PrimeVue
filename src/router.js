import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import ('./components/Dashboard.vue')
    },
    {
        path: '/openorders',
        name: 'openorders',
        component: () => import ('./components/OpenOrders.vue')
    }
];

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
scrollBehavior() {
    return { left: 0, top: 0 };
},
});

export default router;