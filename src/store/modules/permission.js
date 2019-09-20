import { asyncRouters } from '@/router/index.js'

const state = {
    routes: []
}

const mutations = {
    SET_ROUTES(state, payload) {
        state.routes = [...asyncRouters]
    }
}

const actions = {
    getAsyncRoutes({ commit }) {
        commit('SET_ROUTES')
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}