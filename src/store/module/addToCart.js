
const state = {
    style : 'none',
    price : '',
    promotionTag : [],
    id: '',
    title : '',
    shopTit: ''
}

const getters = {
    getStyle(state, getters, rootState){
        return state.style
    },

    getDetail(state, getters, rootState){
        return {
            price: state.price,
            promotionTag: state.promotionTag,
            id: state.id,
            title: state.title,
            id: state.id,
            shopTit: state.shopTit,
        }
    },

}

const actions = {
    change({ commit, state }, style) {
        commit('changeStyle',style)
    },

    addGood({ commit, state }, options) {
        commit('add',options)
    }
}

const mutations = {
    changeStyle(state,style) {
        // state.style == 'none' ? state.style = 'block' : state.style = 'none'
        state.style = style
    },

    add(state, options) {
        state.price = options.price
        state.promotionTag = options.promotionTag
        state.id = options.id,
        state.title = options.title,
        state.shopTit = options.shopTit

    }
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}