import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from '@/store'
import { setTitle } from '@/lib/tools' // 设置浏览器头部标题
//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入

Vue.use(VueRouter)
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}
// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    NProgress.start() // 启动Progress
    const browserHeaderTitle = to.meta.title
    store.commit('SET_BROWSERHEADERTITLE', {
        browserHeaderTitle: browserHeaderTitle
    })
    if (to.name !== 'Personal' && store.state.personalLine) {
        store.commit('SET_PERSONALLINE', false)
    }
    if (to.name === 'Personal') {
        store.commit('SET_ACSHOW', false)
    } else {
        store.commit('SET_ACSHOW', true)
    }
    next()
})
router.afterEach(() => {
    NProgress.done() // 结束Progress
    setTimeout(() => {
        const browserHeaderTitle = store.getters.browserHeaderTitle
        setTitle(browserHeaderTitle)
    }, 0)
})
export default router
