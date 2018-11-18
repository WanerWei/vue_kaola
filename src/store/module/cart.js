
const state = {
    cartGoods : [],
    checkedGoods : [],
    hasCheckedAll : false
}

const getters = {
    // block/none样式
    getStyle(state, getters, rootState){
        return state.style
    },

    // 获得所有购物车的商品
    getCartGoods(state, getters, rootState){
        return state.cartGoods
    },

    // 获得 所有购物车的商品的 个数
    getCartGoodsNum(state, getters, rootState){
        return state.cartGoods.length
    },

    // 获取已勾选的商品所有的 id ，用来判断 状态
    getCheckedIds(state, getters, rootState) {
        let idsArr = []
        // 数组的映射
        state.checkedGoods.map((item, index) => {
            idsArr.push(item.id)
        })

        return idsArr
    },

    // 全选 的状态
    isCheckedAll(state, getters, rootState) {
        return state.hasCheckedAll
    },

    // 返回 已选择商品的 总价格
    getTotalPri(state, getters, rootState) {

        let total = 0
        state.checkedGoods.forEach((value) => {
            total += value.price * value.num
        }) 

        return {
            totalPri : total.toFixed(2),
            taxPri : (total*0.06).toFixed(2)
        }
    },

    // 返回 已经选中的 商品的个数
    getCheckedGoodsNum(state, getters ) {
        return state.checkedGoods.length
    }
}

const actions = {
    // 改变 dispaly
    change({ commit, state }, style) {
        commit('changeStyle',style)
    },

    // 添加商品
    addGood({ commit, state }, options) {

        let index = null
        state.cartGoods.filter((value, i) => {
            if(value.id == options.id) {
                index = i
                return
            }
        })

        // 如果已经存在此 good
        if(!!index || index === 0) {
            // 追加
            commit('update', { index, options })
        }else {
            // 新加
            commit('add',options)
        }
    },

    // 删除指定商品
    removeCurrent({ commit, state }, id) {
        let index1 = -1
        let index2 = -1
        
        // 查询当前所删除的 id 的所在下标
        state.cartGoods.filter((value1, i) => {
            if(value1.id == id) {
                index1 = i
                return
            }
        })

        // 查询当前所删除的 id 的所在下标
        state.checkedGoods.filter((value2, i) => {
            if(value2.id == id) {
                index2 = i
                return
            }
        })

        commit('remove', {index1, index2})
    },

    // check 商品
    checkThis({ commit, state }, options) {

        let index = -1
        state.checkedGoods.filter((value, i) => {
            if(value.id == options.id) {
                index = i
                return
            }
        })

        // 如果已经不存在此 good
        if( index == -1) {
            // 新加
            commit('updateChecked', options )
        }else {
            // 删除
            commit('removeChecked', { index, options })
        }
    },

    // checkAll
    checkAll({ commit, state }, options) {
        commit('checkAllGoods')
    },

    // 更新 已选中的 num
    updateNum({ commit, state }, options) {
        let index1 = -1 
        let index2 = -1
        // 查询当前 id 的所在下标
        state.cartGoods.filter((value, i) => {
            if(value.id == options.id) {
                index1 = i
                return
            }
        })

        state.checkedGoods.filter((value, i) => {
            if(value.id == options.id) {
                index2 = i
                return
            }
        })

        commit('updateGoodNum', { index1, index2, options })
    }
}

const mutations = {
    changeStyle(state,style) {
        // state.style == 'none' ? state.style = 'block' : state.style = 'none'
        state.style = style
    },
    // 添加 商品
    add(state, options) {
        state.cartGoods.push(options)
    },

    remove(state, { index1, index2 }) {
        // 根据下标 删除
        state.cartGoods.splice(index1, 1)
        state.checkedGoods.splice(index2, 1)
    },

    // 更新加入购物车时的 数量 
    update(state, { index, options }) {
        state.cartGoods[index].num += options.num
    },

    removeChecked(state,  { index, options }) {
        state.checkedGoods.splice(index, 1)

        if( state.checkedGoods.length  != state.cartGoods.length ) {
            state.hasCheckedAll = false
        }
    },

    // 选中
    updateChecked(state, options) {
        state.checkedGoods.push(options)

        // 全选 反选
        if( state.checkedGoods.length  == state.cartGoods.length ) {
            state.hasCheckedAll = true
        }
    },

    checkAllGoods(state) {
        state.hasCheckedAll = !state.hasCheckedAll

        // 如果 勾选全选（通过判断全选的状态）
        if( state.hasCheckedAll ) {
            // 将所有的 商品push 到checkedGoods
            state.checkedGoods.splice(0, state.checkedGoods.length)
            state.checkedGoods.push(...state.cartGoods)
        // 如果 取消 全选
        }else {
            // 清空 已 勾选
            state.checkedGoods.splice(0, state.checkedGoods.length)
        }
    },

    updateGoodNum(state, { index1, index2, options }) {
        state.cartGoods[index1].num = options.num
        // 可能会存在 checkedGoods为 空的情况
        if( index2 !== -1 ) {
            state.checkedGoods[index2].num = options.num
        }
    }
}

export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}