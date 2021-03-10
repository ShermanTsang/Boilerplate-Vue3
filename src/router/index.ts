/** @format */

import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: `/`,
            component: () => import('../views/index.vue'),
        },
    ],
})

routes.beforeEach((to, from, next) => {
    next()
})

export default routes
