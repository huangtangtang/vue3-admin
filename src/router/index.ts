import { createRouter, createWebHistory, RouteRecordRaw }  from 'vue-router';
import Layout from '@/layout/index.vue'
// import children from "pages-generated"; // vite-plugin-pages 生成的路由信息

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