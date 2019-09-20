import vue from 'vue'
import vueRouter from 'vue-router'
import store from '@/store'
vue.use(vueRouter)

const currentRouters = [{
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/login'),
        meta: { title: '登录页' }
    },
    {
        path: '/',
        name: '首页',
        component: () =>
            import ('@/layout/index')
    }
]

// 动态路由
export const asyncRouters = [{
        path: '/permission',
        name: 'Permission',
        component: () =>
            import ('@/layout/index'),
        redirect: '/permission/page-use',
        meta: {
            title: '权限许可',
            icon: 'el-icon-lock'
        },
        children: [{
                path: 'page-user',
                name: 'PageUser',
                component: () =>
                    import ('@/layout/index'),
                meta: { title: '用户页面', icon: 'el-icon-user' }
            },
            {
                path: 'page-admin',
                name: 'PageAdmin',
                component: () =>
                    import ('@/layout/index'),
                meta: {
                    title: '管理员页面',
                    icon: 'el-icon-user-solid'
                }
            },
            {
                path: 'roles',
                name: 'Roles',
                component: () =>
                    import ('@/layout/index'),
                meta: { title: '权限设置', icon: 'el-icon-s-tools' }
            }
        ]
    },
    {
        path: '/table',
        name: 'Table',
        redirect: '/table/base-table',
        component: () =>
            import ('@/layout/index'),
        meta: {
            title: 'Table',
            icon: 'el-icon-table iconfont'
        },
        children: [{
                path: 'base-table',
                name: 'BaseTable',
                component: () =>
                    import ('@/layout/index'),
                meta: { title: '普通表格' }
            },
            {
                path: 'complex-table',
                name: 'ComplexTable',
                component: () =>
                    import ('@/layout/index'),
                meta: { title: '复杂表格' }
            }
        ]
    },
]

const createRouter = () => {
    return new vueRouter({
        routes: currentRouters,
        scrollBehavior() {
            return { x: 0, y: 0 }
        }
    })
}

const router = createRouter()

// 路由导航
router.beforeEach(async(to, from, next) => {
    if (to.path === '/login') {
        next()
    } else {
        // 获取动态路由
        await store.dispatch('permission/getAsyncRoutes')
        next()
    }
})

export default router