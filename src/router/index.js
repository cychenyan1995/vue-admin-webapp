import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter)

const currentRouters = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
        meta: {title: '登录页'}
    }
]

const createRouter = () => {
    return new vueRouter({
        routes: currentRouters,
        scrollBehavior() {
            return {x:0, y:0}
        }
    })
}

const router = createRouter()

export default router