import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: () =>
                import('../page/main.vue')
        },
        {
            path: '/grid',
            component: () =>
                import('../page/grid.vue')
        },
        {
            path: '/input',
            component: () =>
                import('../page/input.vue')
        }

    ]
})
export default router
