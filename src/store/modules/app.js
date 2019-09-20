const state = {
    isOpen: sessionStorage.getItem('isOpen') ? sessionStorage.getItem('isOpen') : true
}

const mutations = {
    SET_ISOPEN(state, payload) {
        state.isOpen = payload
        sessionStorage.setItem('isOpen', payload)
    }
}

export default {
    namespaced: true,
    state,
    mutations
}