import {routes} from "@/router/index";

function filterMapRoutes(data){
  let routeMenu = []
  const menu = data[0].children.filter(v=> !v.hiden)
  routeMenu = menu.map((v)=>({
    path:v.path,
    title:v.meta.title
  }))
  return routeMenu
}

export default {
    namespaced: true,
    state: {
        nav: [],
        activeNav:''
    },
    mutations: {
        SET_ROUTES: (state, payload) => {
            state.nav = payload
        },
        SET_ACTIVE:(state,payload)=>{
            state.activeNav = payload
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

