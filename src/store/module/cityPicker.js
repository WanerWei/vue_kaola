
const state = {
    style : 'none',
    province : '',
    city: '' ,
    district : ''
}

const getters = {
    getStyle(state, getters, rootState){
        return state.style
    },

    getCity(state, getters, rootState){
        return {
            province :  state.province,
            city :  state.city,
            district :  state.district,
        }
    },
}

const actions = {
    change({ commit, state }, style) {
        commit('changeStyle',style)
    },

    chooseCity({ commit, state }, values) {
        // console.log(cityCurrentName)
        commit('confirmCity',values)

    }
}

const mutations = {
    changeStyle(state,style) {
        state.style = style
    },

    confirmCity(state,values) {
        state.province = values[0]
        state.city = values[1]
        state.district = values[2]
    }
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}