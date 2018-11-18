<template>
<main class="newArrival">
    <div class="newArrivalWrap">
        <new-goods-model :item="item" v-for="item in goods" :key="item.content.goodsId"></new-goods-model>
    </div>
</main>
</template>

<script>

import NewGoodsModel from 'components/common/newGoods/newGoodsModel/newGoodsModel'

import { scroll } from 'utils/scroll'
import http  from 'utils/http'
import { Indicator } from 'mint-ui'

export default {
    data() {
        return {
            goods: []
        }
    },
    components: {
        NewGoodsModel
    },
    async beforeCreate() {

        // 加载提示
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })

        this.goods = (await http({
            url: "/pages/region/advance/5a9705a457bd451190af626c34a7e357.html",
            method: 'get',
            params: {
                type : 1
            }
        })).data[1].businessObj.list

        Indicator.close()
    },

    mounted() {

        // 实例一个 scroll
        scroll({
            el: ".newArrival"
        })

    }
}
</script>

<style lang="stylus" scoped>
.newArrival
    margin-top .5rem
    height 5.60rem
</style>


