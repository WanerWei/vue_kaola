
const state = {
    style : 'block'
}

const getters = {
    getStyle(state, getters, rootState){
        return state.style
    }
}

const actions = {
    change({ commit, state }) {
        commit('changeStyle')
    }
}

const mutations = {
    changeStyle(state) {
        state.style == 'none' ? state.style = 'block' : state.style = 'none'
    }
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}