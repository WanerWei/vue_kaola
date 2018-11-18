<template>
    <section class="exclusiveBrand">
        <div class="brandLeft">
            <div class="brandImg">
                <img :src="item.highUrl" alt="">
            </div>
            <p class="brandName">{{ item.brandName }}</p>
            <p class="recReason">{{ item.recReason }}</p>
        </div>
        <div class="brandRight">
            <exclusive-brand-item :item="item2" v-for="item2 in item.goods" :key="item2.goodsId"></exclusive-brand-item>
        </div>
        <i></i>
    </section>
</template>

<script>

import ExclusiveBrandItem from 'components/common/newGoods/ExclusiveBrand/ExclusiveBrandItem'

export default {
    props: {
        item: Object
    },
    components: {
        ExclusiveBrandItem
    }
}
</script>

<style lang="stylus" scoped>

@import '~styles/ellipsis.styl' 

.exclusiveBrand
    width 100%
    height 1.21rem
    position relative
    padding-top .15rem
    i
        position absolute
        display block
        height 0.005rem
        width 3.45rem
        background-color: rgb(221, 221, 221)
        left .15rem
        bottom 0
    .brandLeft
        width .755rem
        height 100%
        margin-left .05rem
        display flex
        flex-direction column
        align-items center
        float left
        .brandImg
            width .45rem
            height .45rem
            border .01rem solid #ddd
            overflow hidden
            img
                width 100%
        p
            width 100%
            text-align center
            ellipsis 1
        .brandName
            color rgb(51, 51, 51)
            font-size .13rem
        .recReason
            margin-top .05rem
            color rgb(153, 153, 153)  
            font-size .12rem
    .brandRight
        float left

        


    

</style>


