import { createRouter, createWebHistory, RouteRecordRaw }  from 'vue-router';
import Layout from '@/layout/index.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
                meta: {
                    title: 'Dashboard'
                }

            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;