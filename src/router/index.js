import VueRouter from 'vue-router'
import Serch from '../pages/Serch'
import Home from '../pages/Home'
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/home', // 重定向到 默认页面
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/serch',
            name: 'serch',
            component: Serch
        },
    ]
})

export default router