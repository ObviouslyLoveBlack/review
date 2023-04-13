import {routes} from "@/router/index";

function filterMapRoutes(data){
  let routeMenu = []
  routeMenu = data.map((v)=>({
    path:v.path,
    title:v.meta.title
  }))
  return routeMenu
}

export default {
    namespaced: true,
    state: {
        nav: []
    },
    mutations: {
        SET_ROUTES: (state, payload) => {
            state.nav = payload
        }
    },
    actions: {
        NavRouter({ commit }) {
            return new Promise((resolve) => {
                const menu = filterMapRoutes(routes)
                commit('SET_ROUTES',menu)
                resolve(menu)
            })
        }
    }
}

