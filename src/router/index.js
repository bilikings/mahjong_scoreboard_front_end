import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
    {
        path: '/',
        component: () => import('@/views/Home')
    },
    {
        path: '/room',
        component: () => import('@/views/Room')
    }
]

const createRouter = () => new Router ({
    routes: constantRoutes
})

const router = createRouter()

export default router;
