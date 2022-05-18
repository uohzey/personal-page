import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',

        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/HomePage.vue')
        }
    ],
})
export default router