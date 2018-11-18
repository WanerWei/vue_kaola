<template>
    <div class="recommendListItem">
        <div class="recommendGImg">
            <img :src="item.imageUrl" alt="">
        </div>
        <div class="recommedGDet">
            <p class="recommendGTit">{{ item.title }}</p>
            <span class="recommendGPri">￥{{ item.currentPrice }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object
    }
}
</script>

<style lang="stylus" scoped>
@import "~styles/ellipsis.styl"

.recommendListItem
    width 1.725rem
    height 2.465rem
    margin .05rem
    border: 1px solid #ececec;
    border-radius: .05rem
    background-color: #fff
    .recommendGImg
        width 100%
        height 1.705rem
        overflow hidden
        img 
            width 100%
    .recommedGDet
        width 100%
        padding .1rem
        .recommendGTit
            line-height .18rem
            ellipsis 100% 2
        span
            font-size: .17rem;
            color: red;
            font-weight 700

</style>

