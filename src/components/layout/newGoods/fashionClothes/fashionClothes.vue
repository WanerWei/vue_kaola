<template>
<main class="fashionClothes">
    <div class="fashionClothesWrap">
        <fashion-clothes-list :item="item" v-for="item in goods" :key="item.content.goodsId"></fashion-clothes-list>
    </div>
</main>
</template>

<script>

import FashionClothesList from 'components/common/newGoods/newGoodsModel/newGoodsModel'

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
        FashionClothesList
    },
    async beforeCreate() {
        
        // 加载提示
        Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
        })

        this.goods = (await http({
            url: "/pages/region/advance/jjfcc0z5pages3.html",
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
            el: ".fashionClothes"
        })

    }
}
</script>

<style lang="stylus" scoped>
.fashionClothes
    margin-top .5rem
    height 5.60rem
</style>


