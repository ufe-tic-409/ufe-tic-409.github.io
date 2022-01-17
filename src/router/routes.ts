import type {RouteRecordRaw} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/Home.vue'),
    },
    {
        path: '/session-1',
        name: 'session-1',
        component: () => import("../pages/Session1.vue")
    },
    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('../pages/Error404.vue')
    }
]

export default routes
