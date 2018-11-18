<template>
    <div class="cartBox" :style="{ display : getStyle }">
        <div class="cartCon">
            <div class="cartTit">
                <span>数量</span>
                <span class="cancle" @click="cancle">x</span>
            </div>
            <div class="cartDetail">
                <div class="detailTop">
                    <div class="goodImg">
                        <img src="https://pop.nosdn.127.net/9fdece53-36cf-4b40-8a43-9e1c128e7746?imageView&thumbnail=150x0&quality=75&type=webp" alt="">
                    </div>
                    <p>
                        <span>￥{{ getDetail.price }}</span>
                        <ul>
                            <li v-for="item in getDetail.promotionTag" :key="item.promotionTag">
                                <span class="proSpan">{{ item }}</span>
                            </li>
                        </ul>
                    </p>
                </div>
                <div class="detailBot">
                    <p>数量</p>
                    <div class="goodNum">
                        <span class="reduce" @click="reduce" :class="{ 'disabled' : num == 1 }">-</span>
                        <input type="text" class="num" v-model="num">
                        <span class="add" @click="add">+</span>
                        <span class="tip">库存充足</span>
                    </div>
                </div>
            </div>
            <div class="cartFoot" @click="addToCart" >
                <span>确认</span>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {

    data() {
        return {
            num : 1
        }
    },

    computed: {
        ...mapGetters('addToCart',['getStyle','getDetail'])
    },

    methods: {
        cancle() {
            this.$store.dispatch('addToCart/change', 'none')
        },

        add() {
            this.num ++
        },

        reduce() {
            if(this.num >1) {
                this.num--
            }else{
                return
            }
        },

        addToCart() {

            this.$store.dispatch('addToCart/change', 'none')


            this.$store.dispatch('cart/addGood', {
                num : this.num,
                // ...this.getDetail
                price : this.getDetail.price,
                promotionTag : this.getDetail.promotionTag,
                id : this.getDetail.id,
                title : this.getDetail.title,
                shopTit : this.getDetail.shopTit
            })

            this.num = 1

            // this.toCart()
        },

        toCart() {
            this.$router.push({ name: 'cart', query : { goodId : this.getDetail.id } })
        }
    }
}

</script>

<style lang="stylus" scoped>

.detailBot
    width 100%
    height .66rem
    margin-bottom .1rem
    padding: .1rem .1rem 0;
    p
        height: .40rem;
        line-height: .40rem;
        font-size: .14rem;
        color: #999

    .goodNum
        span 
            float left
        .reduce
        .add
            height .30rem
            width .35rem
            border: .01rem solid #999;
            text-align center
            line-height .3rem
            font-size .18rem
            &.disabled
                color #ddd
        .num
            float left
            width .50rem
            height .3rem
            outline none
            border: .01rem solid #999;
            border-left none
            border-right none
            text-align center
            line-height .3rem
        .tip
            font-size: .13rem;
            line-height: .3rem;
            color: #d22147
            margin-left .1rem

.detailTop
    padding: .1rem .1rem 0;
    height .85rem
    width 100%
    p
        span 
            float left
            line-height: .16rem;
            color: #e31436
        .proSpan
            display: inline-block;
            line-height: 0.13rem;
            padding: 0 0.03rem;
            margin-left: 0.08rem;
            margin-top: 0.01rem;
            background: #e31436;
            font-size: 0.11rem;
            color: #fff;
    .goodImg
        float left
        width .75rem
        height .75rem
        overflow hidden
        border 0.01rem solid #f0f0f0
        margin-right .1rem
        img 
            width 100%
    

.cartBox
    position fixed 
    left 0
    bottom 0
    height 2.7rem
    width 100%
    background #fffcfc
    .cartTit
        width 100%
        height .44rem
        line-height: .44rem;
        padding: 0 .10rem;
        background: #fcf9f8;
        font-size: .14rem;
        background #fcf9f8
        color: #000;
        border-bottom: .01rem solid #ddd
        border-top: .01rem solid #ddd
        display flex
        justify-content space-between
        .cancle
            font-size .26rem
            color #ddd
            font-weight 100
    .cartDetail
        width 100%
        height 1.76rem
    .cartFoot
        width 100%
        height .50rem
        color: #fff;
        background: #404040;
        line-height .5rem
        text-align center
        font-size .16rem
        



</style>


