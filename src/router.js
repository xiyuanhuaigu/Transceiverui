import { createRouter, createWebHistory, } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            component: () => import('./components/login/Loginandregister.vue'),
        },
        // 重定向
        {
            path: '/:pathMatch(.*)*',
            redirect: '/login'
        }
    ]
})

export default router