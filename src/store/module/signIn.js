
const state = {
    isSigned : false
}

const getters = {
    isSignIn (state, getters) {
        return state.isSigned
    }
}

const actions = {
    handleSignIn({ commit, state }, options) {
        if(options == 1) {
            commit('signIn')
        }else {
            return
        }
    }
}

const mutations = {
    signIn(state) {
        state.isSigned = true
    }
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}