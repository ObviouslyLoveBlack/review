import router from "./router";
// import {useStore} from "vuex";
// const store = useStore()
import store from "./store";
import {toRaw} from 'vue'

function setDocumentTitle(title) {
    document.title = title + '-' + '零束科技官网 - 智能全栈技术'
}
router.beforeEach(async (to, from, next) => {
    to.meta && typeof to.meta.title !== 'undefined' &&
        setDocumentTitle(to.meta.title)
    const menu = store.getters.routerNav
    if (menu.length > 0) {
        store.commit('navs/SET_ACTIVE',to.path)
        next()
    } else {
        try {
            let navRouters = await store.dispatch('navs/NavRouter')
            // localStorage.setItem('navRouters',JSON.stringify(toRaw(navRouters)))
            next({ ...to, replace: true,})
        } catch (error) {
            console.log(error.message);
            next(`/?redirect=${to.path}`)
        }
    }
})
router.afterEach((to,from)=>{
})