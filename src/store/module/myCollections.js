
const state = {
    myCollections : []
}

const getters = {
    // 类似计算属性 返回已收藏的个数
    collectionsNum(state, getters, rootState) {
        return state.myCollections.length
    },

    // 获取所有的 id ，用来判断 是否已收藏
    getIds(state, getters, rootState) {
        let idsArr = []
        // 数组的映射
        state.myCollections.map((item, index) => {
            idsArr.push(item.goodsId)
        })

        return idsArr
    },
}

// 动作
const actions = {
    addToMyCollections({ commit, state },item) {
        // 根据 goodsId 遍历是否已经存在 此item
        if( state.myCollections.find( i => i.goodsId === item.goodsId )){
            commit('remove', item)
        }else{
            commit('push', item)
        }
    },

    // 判断是否 已经收藏
    // isCollected({ state }, id) {
    //     return state.myCollections.find( i => i.goodsId === id )
    // }
}

// 突变
const mutations = {
    push(state, item) {
        state.myCollections.push(item)
    },
    remove(state, item) {
        // 查询下标，按照下标 删除
        let index = state.myCollections.lastIndexOf(item)
        state.myCollections.splice(index, 1)
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}