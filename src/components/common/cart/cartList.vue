<template>
        <div class="good">
            <div class="shopTit">
                <!-- <input type="checkbox" class="shopCheckbox"> -->
                <span>{{ item.shopTit }}</span>
            </div>
            <div class="goodBox">
                <div class="goodCon">
                    <div class="goodcheck" @click="checkThis(item)">
                        <i>
                            <svg v-if="this.checkedIds.indexOf(item.id) == -1" t="1542015878201" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1942" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M512 143.984c202.912 0 368 165.088 368 368 0 202.912-165.088 368-368 368S144 714.912 144 512C144 309.072 309.072 143.984 512 143.984M512 111.984c-220.912 0-400 179.088-400 400s179.072 400 400 400 400-179.072 400-400S732.912 111.984 512 111.984L512 111.984z" p-id="1943" fill="#707070"></path></svg>
                            <svg  v-else t="1542015904377" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2147" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M512 128C299.92 128 128 299.92 128 512s171.92 384 384 384 384-171.92 384-384S724.08 128 512 128zM732.624 392.4 472.4 652.624c-9.36 9.376-24.56 9.376-33.936 0l-147.072-147.088c-9.376-9.376-9.376-24.576 0-33.936 9.376-9.376 24.576-9.376 33.936 0l130.112 130.112 243.264-243.264c9.36-9.376 24.56-9.376 33.936 0S742 383.024 732.624 392.4z" p-id="2148" fill="#2c2c2c"></path></svg>
                        </i>
                    </div>
                    <div class="goodDetail">
                        <div class="goodImg">
                            <img src="https://pop.nosdn.127.net/24f87c42-2a38-4303-a2bf-d704fe36fd47?imageView&thumbnail=120x0&quality=75&type=webp" alt="">
                        </div>
                        <div class="goodDet">
                            <p>
                                <ul>
                                    <li v-for="i in item.promotionTag" :key="i">
                                        <span>{{ i }}</span>
                                    </li>
                                </ul>
                                <span class="goodTit">{{ item.title }}</span>
                            </p>
                            <p class="price">
                                <span class="add" @click="add(item)">+</span>
                                <input type="text" class="num" v-model="num">
                                <span class="reduce" @click="reduce(item)" :class="{ 'disabled' : num == 1 }">-</span>
                            </p>
                            <p class="pri">
                                <span>￥{{ item.price }}</span>
                                <i @click="removeCurrent(item.id)">
                                    <svg t="1541942228863" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2139" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M661.333333 213.333333V170.666667c0-23.466667-19.2-42.666667-42.666666-42.666667H405.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667v42.666666H170.666667v42.666667h64v597.333333c0 23.466667 19.2 42.666667 42.666666 42.666667h469.333334c23.466667 0 42.666667-19.2 42.666666-42.666667V256h64v-42.666667h-192zM405.333333 170.666667h213.333334v42.666666H405.333333V170.666667z m341.333334 682.666666H277.333333V256h469.333334v597.333333z" p-id="2140" fill="#bfbfbf"></path><path d="M618.666667 341.333333h42.666666v426.666667h-42.666666zM362.666667 341.333333h42.666666v426.666667h-42.666666zM490.666667 341.333333h42.666666v426.666667h-42.666666z" p-id="2141" fill="#8a8a8a"></path></svg>
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
    props : {
        item: Object
    },

    data() {
        return {
            num : this.item.num,

        }
    },

    computed: {
        ...mapGetters('cart', {
            checkedIds : "getCheckedIds"
        })
    },

    methods :{
        add(item) {
            // 数目++
            this.num ++
            // 同时更改 所有购物车商品的的数组 和 已勾选商品的数组
            this.$store.dispatch('cart/updateNum', {
                id : item.id,
                num : this.num
            })
        },

        reduce(item) {
            if(this.num >1) {
                this.num--

                // 同时更改 所有购物车商品的的数组 和 已勾选商品的数组
                this.$store.dispatch('cart/updateNum', {
                    id : item.id,
                    num : this.num
                })
            }else{
                return
            }
        },

        // 删除当前 商品
        removeCurrent(id) {
            this.$store.dispatch('cart/removeCurrent', id)
        },

        // 选中此商品
        checkThis(item) {
            this.$store.dispatch('cart/checkThis', {
                id : item.id,
                price: item.price,
                num : this.num
            })
        }
    },
}
</script>

<style lang="stylus" scoped>

@import "~styles/ellipsis"

.pri
    height .25rem
    line-height .25rem
    span 
        font-weight: bold;
        font-size: .13rem;
        color #333
        float left
    i 
        float right

.goodDet
    padding 0 .1rem
    width 2.60rem
    float left
    ul
        li
            float left
            span
                line-height: .16rem;
                color: #e31436
                display: inline-block;
                line-height: 0.13rem;
                padding: 0 0.03rem;
                margin-left: 0.08rem;
                margin-top: 0.01rem;
                background: #e31436;
                font-size: 0.11rem;
                color: #fff;
    p
        ellipsis 2.40rem 1
        .goodTit
            margin-left .04rem

.price
    height .3rem
    margin-top .02rem
    span 
        float right
    .reduce
    .add
        height .25rem
        width .30rem
        border: .01rem solid #999;
        text-align center
        line-height .25rem
        font-size .18rem
        &.disabled
            color #ddd
    .num
        float right
        width .35rem
        height .25rem
        outline none
        border: .01rem solid #999;
        border-left none
        border-right none
        text-align center
        line-height .25rem

.goodImg
    width .8rem
    height .8rem
    overflow hidden
    float left
    img
        width 100%

.goodCon
    width 100%
    height 1rem
    padding-top .1rem
    border-bottom 0.01rem solid #f0f0f0
    .goodcheck
        width .30rem
        height 0.3rem
        float left
        padding-left .1rem
    .goodDetail
        margin-left .05rem
        float left
        width 3.40rem
        height .8rem

.good
    width 100%
    height auto
    background #fff
    margin-bottom .1rem
    .shopTit
        width 100%
        height .4rem
        line-height .4rem
        padding 0 .1rem
        border-bottom: solid .01rem #ececec;
        ellipsis 100% 1
        color #333
        input
            margin-right .05rem
            vertical-align middle


.cartWrap
    height max-content
    width 100%


</style>


