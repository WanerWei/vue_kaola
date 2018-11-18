<template>
    <section class="goodList">
        <div class="goodImg">
            <img :src="item.content.imageUrl" alt="">
        </div>
        <div class="goodDetail">
            <p class="introduce">{{ item.content.introduce }}</p>
            <p class="title">{{ item.content.title }}</p>
            <p class="activityTag" v-if="item.content.activityTag"><span>{{ item.content.activityTag }}</span></p>
            <p class="enptyActivityTag" v-else></p>
            <div class="goodPri">
                <i>￥</i>
                <span class="actualCurrentPrice">{{ item.content.actualCurrentPrice }}</span>
                <del class="marketPrice">￥{{ item.content.marketPrice }}</del>
                <div class='toBuy' @click="$router.push({ name: 'goodDetail', query: { id:item.content.goodsId ,title: item.content.title }})">
                    <span>立即购买</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props : {
        item: Object
    },
    // methods: {

    // }
}
</script>

<style lang="stylus" scoped>

@import '~styles/border.styl'
@import '~styles/ellipsis.styl'

.goodList
    width 3.75rem
    height 1.51rem
    padding .1rem
    background #fff
    border-bottom .01rem solid rgb(240, 240, 240);
    .goodImg
        float left
        width 1.3rem
        height 1.3rem
        overflow hidden
        img
            width 100%
    .goodDetail
        float left
        width 2.25rem
        height 100%
        padding-left .1rem
        .introduce
            height: 0.20rem;
            line-height: 0.20rem;
            font-weight: 700;
            color: rgb(51, 51, 51);
            font-size: 0.15rem;
            margin-top: 0.08rem;
            ellipsis 100% 1
        .title
            margin .05rem 0
            ellipsis 100% 2
            color: rgb(51, 51, 51);
            font-size: 0.14rem;
            line-height: 0.17rem;
            max-height: 0.34rem;
        .activityTag
            span
                color: rgb(255, 255, 255);
                background-color: rgb(255, 30, 50);
                padding-left:.04rem;
                padding-right:.04rem;
                height: .15rem;
                line-height: .15rem;
                font-size: .10rem;
        .enptyActivityTag
            height .2rem
        .goodPri
            height .3rem
            margin-top .03rem
            i
                height: .185rem;
                line-height: .4rem;
                font-size: .11rem;
                font-weight: 400;
                color: rgb(255, 30, 50)
                float left
            .actualCurrentPrice
                float left
                height: .21rem;
                line-height: .4rem;
                font-size: .19rem;
                font-weight: 700;
                color: rgb(255, 30, 50);
            del
                float left
                height: .185rem;
                line-height: .44rem;
                color: rgb(153, 153, 153);
                margin-left: .02rem;
                text-decoration: line-through;
                font-size: .12rem;
            .toBuy
                float right 
                // padding .05rem .15rem
                line-height: .28rem;
                border-radius: .50rem;
                background-color: rgb(255, 30, 50);
                span 
                    color: rgb(255, 255, 255);
                    padding-left: .16rem;
                    padding-right: .16rem;
                    font-size: .13rem;
                    line-height: .28rem;

            
</style>


