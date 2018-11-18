<template>
    <div class="attachmentItem">
        <div class="attachmentImg">
            <img :src="item.imageUrl" alt="">
            <span v-if="item.promotionLabel">{{ item.promotionLabel }}</span>
        </div>
        <p class="attachmentTit">{{ item.title }}</p>
        <p class="pri">￥{{ item.price || item.currentPrice }} <del v-if="item.marketPrice" class="marketPrice">￥{{ item.marketPrice }}</del></p>
    </div>
</template>

<script>
export default {
    props:{
        item: [String,Object]
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'

.attachmentItem
    width 1.25rem
    height 1.82rem
    float left
    margin-left .1rem
    .attachmentImg
        width 1.25rem
        height 1.25rem
        overflow hidden
        position relative
        border .01rem solid #eee
        img 
            width 100%
        span 
            position absolute
            height: .22rem;
            border: .01rem solid #e73c3c;
            background-color: #fff;
            color: #e73c3c;
            bottom 0
            left 0
            font-size: .12rem;
            text-align: center;
            line-height: .22rem;
    .attachmentTit
        ellipsis 1.25rem 2
        text-align: center;
        margin: .06rem 0 .04rem;
        font-size: .12rem;
        color: #333;
        line-height: .16rem;
        height: .32rem
    .pri
        text-align: center;
        font-size: .13rem;
        color #e73c3c
        .marketPrice
            text-decoration: line-through;
            font-size: 10px;
            color: #999;


</style>


