
const state = {
    style : 'none',
    toTop : false
}

const getters = {
    getStyle(state, getters, rootState){
        return state.style
    },

    isToTop(state, getters, rootState) {
        return state.toTop
    }
}

const actions = {
    change({ commit, state }, style) {
        commit('changeStyle',style)
    },

    goToTop({ commit, state }) {
        commit('changeToTop')
    }
}

const mutations = {
    changeStyle(state,style) {
        // state.style == 'none' ? state.style = 'block' : state.style = 'none'
        state.style = style
    },

    changeToTop(state) {
        // 返回一个状态，并在执行一次后将 此状态变为 false 初始值
        console.log(state.toTop)
        state.toTop = true
        setTimeout(function() {
            state.toTop = false
        },300) 
    }
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}