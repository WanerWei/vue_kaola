<template>
    <div class="dayNewRecGood">
        <div class="dayNewRecGoodCon">
            <div class="goodImg">
                <img :src="item.imageUrl" alt="">
            </div>
            <div class="goodDetail">
                <p class="goodIntroduce">{{ item.introduce }}</p>
                <p class="goodTitle">{{ item.title }}</p>
                <div class="interestLabel">
                    <span v-if="item.interestLabel">{{ item.interestLabel }}</span>
                </div>
                <div class="goodPri">
                    <i>￥</i>
                    <span class="currentPrice">{{ item.currentPrice }}</span>
                    <del class="marketPrice">￥{{ item.marketPrice }}</del>
                    <b @click="addToCollections(item)">
                        <svg v-if="getIds.lastIndexOf(item.goodsId) !== -1" t="1541851387839" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1105" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M859.8 191.2c-80.8-84.2-212-84.2-292.8 0L512 248.2l-55-57.2c-81-84.2-212-84.2-292.8 0-91 94.6-91 248.2 0 342.8L512 896l347.8-362C950.8 439.4 950.8 285.8 859.8 191.2z" p-id="1106" fill="#ff1e32"></path></svg>
                        <svg v-else t="1541688945782" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3665" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><path d="M471.53152 804.33152a20.45952 20.45952 0 0 0 15.2576 6.81984h0.02048a20.48 20.48 0 0 0 15.2576-6.84032l270.00832-302.51008a185.81504 185.81504 0 0 0 42.14784-117.39136c0-103.48544-85.87264-187.65824-191.44704-187.65824-51.97824 0-100.43392 20.0704-136.23296 55.808-35.79904-35.71712-84.25472-55.808-136.23296-55.808-105.55392 0-191.44704 84.1728-191.44704 187.65824 0 42.55744 14.97088 84.2752 42.88512 118.31296 2.62144 3.19488 207.17568 231.66976 269.78304 301.60896z m-121.2416-566.62016c47.53408 0 91.29984 21.25824 120.05376 58.28608 7.76192 9.99424 24.59648 9.99424 32.3584 0 28.75392-37.04832 72.51968-58.28608 120.05376-58.28608 82.98496 0 150.48704 65.80224 150.48704 146.69824a142.336 142.336 0 0 1-32.29696 90.78784l-254.1568 284.75392c-93.71648-104.67328-249.1392-278.3232-254.0544-284.03712a142.92992 142.92992 0 0 1-32.89088-91.50464c-0.02048-80.87552 67.4816-146.69824 150.44608-146.69824z" fill="#ff1e32" p-id="3666"></path></svg>
                    </b>
                </div>
            </div>
            <i class="borderBotm"></i>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
    props: {
        item: Object
    },

    computed : {
        // 得到所有的 收藏商品
        ...mapState('myCollections', {
            collections: "myCollections"
        }),

        // 得到所有的 收藏商品的 id
        ...mapGetters('myCollections',["getIds"])
    },

    methods:{
        addToCollections(item) {
            // 派发任务 
            this.$store.dispatch('myCollections/addToMyCollections', item)
        }
    },

    // watch: {
    //     getIds(newValue) {
    //         console.log(newValue)
    //     }
    // }
}

</script>

<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'


.dayNewRecGood
    width 100%
    height 1.4rem
    .dayNewRecGoodCon
        height 100%
        width 100%
        padding .1rem .15rem
        position relative
        .borderBotm
            position absolute
            display block
            width 3.45rem
            height .005rem
            background #ddd
            left .15rem
            bottom 0
    .goodImg
        float left
        overflow hidden
        width 1.2rem
        height 1.2rem
        img
            width 100%
    .goodDetail
        float left
        width 2.25rem
        height 100%
        padding-left .1rem
        .goodIntroduce
            font-weight: 700
            font-size: .15rem
            color: rgb(51, 51, 51);
            line-height: .2rem;
            margin-bottom: .04rem;
            ellipsis 1
        .goodTitle
            ellipsis 100% 2
            min-height .38rem
            font-size: .14rem;
            color: rgb(51, 51, 51);
            text-align: left;
            line-height: 20px;
            margin-bottom: .06rem;
        .interestLabel
            height .18rem
            span
                font-size: .12rem;
                color: rgb(255, 30, 50);
                border: .01rem solid red !important
                border-radius: .50rem;
                padding: 0 .04rem
        .goodPri
            margin-top .05rem
            height: .28rem;
            position relative
            b
                display block
                width .33rem
                height .33rem
                background #fff
                border 0.01rem solid #ff1e32
                border-radius 50%
                position absolute
                right 0
                bottom -.05rem
                svg
                    position absolute
                    left .035rem
                    top .038rem
            i
                font-weight: 700;
                font-size: .12rem;
                color: rgb(227, 20, 54);
                margin-right: .015rem;
            .currentPrice
                font-size: .20rem;
                color: rgb(227, 20, 54);
                font-weight: 700;
                line-height: .20rem
            .marketPrice
                font-size: .12rem;
                color: rgb(153, 153, 153);
                text-decoration: line-through
</style>


