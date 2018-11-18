<template>
    <div class="collection">
        <div class="goodImg">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="goodCon">
            <p class="tit">{{ item.title }}</p>
            <p class="priInner">国内价￥<del>{{ item.marketPrice }}</del></p>
            <p class="priOnsell">售价￥{{ item.currentPrice }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        item: Object
    }
}
</script>

<style lang="stylus" scoped>
@import "~styles/ellipsis"

.collection
    width 1.725rem
    height 2.575rem
    margin 0 .05rem .1rem .1rem
    background #fff
    float left
    .goodImg
        width 1.725rem
        height 1.735rem
        overflow hidden
        img
            width 100%
    .goodCon
        width 1.875rem
        height .84rem
        padding .05rem .08rem
        border-top 0.01rem solid #f0f0f0
        .tit    
            ellipsis 1.60rem 2
            color #333
            line-height .16rem
            font-size .14rem
            margin-bottom .03rem
        .priInner
            color #999
            font-size .12rem
            del
                text-decoration line-through
        .priOnsell
            color #d22147
            font-size .12rem
            font-weight: bold

</style>


