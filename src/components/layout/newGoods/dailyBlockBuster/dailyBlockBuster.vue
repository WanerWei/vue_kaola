<template>
<main class="dailyBlockBuster">
    <div class="blockBusterWrap">
        <block-buster-list :item="item" v-for="item in goods" :key="item.content.goodsId"></block-buster-list>
    </div>
</main>
</template>

<script>

import BlockBusterList from 'components/common/newGoods/newGoodsModel/newGoodsModel'

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
        BlockBusterList
    },
    async beforeCreate() {

        // 加载提示
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })

        this.goods = (await http({
            url: "/pages/region/advance/ba6957e18cb641ee950f74f12c423de8.html",
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
            el: ".dailyBlockBuster"
        })

    }
}
</script>

<style lang="stylus" scoped>
.dailyBlockBuster
    margin-top .5rem
    height 5.60rem
</style>


