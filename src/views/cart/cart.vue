<template>
    <div class="cartBox">
        <div class="cartTit">
            <i class="back" @click="$router.back()">
                <svg t="1541493588317" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1090" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M672 160c0 8.2-3.1 16.4-9.4 22.6L333.3 512l329.4 329.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-352-352c-12.5-12.5-12.5-32.8 0-45.3l352-352c12.5-12.5 32.8-12.5 45.3 0 6.2 6.2 9.3 14.4 9.3 22.6z" p-id="1091" fill="#8a8a8a"></path></svg>
            </i>
            <span>购物车({{ goods.length }})</span>
            <i @click="$router.push({ name : 'index' })" class="toHome">
                <svg t="1541681314579" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2739" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><path d="M744 536c-8.848 0-16 7.152-16 16l0 240-128 0 0-176c0-8.848-7.152-16-16-16l-160 0c-8.848 0-16 7.152-16 16l0 176-128 0 0-240c0-8.848-7.152-16-16-16s-16 7.152-16 16l0 256c0 8.848 7.152 16 16 16l160 0c8.848 0 16-7.152 16-16l0-176 128 0 0 176c0 8.848 7.152 16 16 16l160 0c8.848 0 16-7.152 16-16l0-256C760 543.152 752.848 536 744 536zM821.6 508.688 515.312 202.416c-6.256-6.256-16.368-6.256-22.624 0L186.4 508.688c-6.256 6.256-6.256 16.368 0 22.624s16.384 6.256 22.624 0L504 236.352l294.96 294.96c6.256 6.256 16.384 6.256 22.64 0S827.84 514.944 821.6 508.688zM648 296l48 0 0 48c0 8.832 7.152 16 16 16s16-7.168 16-16l0-64c0-8.832-7.152-16-16-16l-64 0c-8.848 0-16 7.168-16 16S639.152 296 648 296z" p-id="2740" fill="#ff1e32"></path></svg>
            </i>
        </div>
        <div id="cartBox">
            <div class="cartWrap">
                <cart-list :item="item" v-for="item in goods" :key="item.id"></cart-list>
            </div>
        </div>
        <div class="payForBox">
            <div class="checkAll">
                <i @click="checkAll">
                    <svg id='checkall' v-if="!isCheckedAll" t="1542015878201" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1942" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M512 143.984c202.912 0 368 165.088 368 368 0 202.912-165.088 368-368 368S144 714.912 144 512C144 309.072 309.072 143.984 512 143.984M512 111.984c-220.912 0-400 179.088-400 400s179.072 400 400 400 400-179.072 400-400S732.912 111.984 512 111.984L512 111.984z" p-id="1943" fill="#707070"></path></svg>
                    <svg  v-else t="1542015904377" id='checkall' class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2147" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M512 128C299.92 128 128 299.92 128 512s171.92 384 384 384 384-171.92 384-384S724.08 128 512 128zM732.624 392.4 472.4 652.624c-9.36 9.376-24.56 9.376-33.936 0l-147.072-147.088c-9.376-9.376-9.376-24.576 0-33.936 9.376-9.376 24.576-9.376 33.936 0l130.112 130.112 243.264-243.264c9.36-9.376 24.56-9.376 33.936 0S742 383.024 732.624 392.4z" p-id="2148" fill="#2c2c2c"></path></svg>
                </i>
                <label for="checkall">全选</label>
            </div>
            <div class="payFor">
                <div class="gotoPay">
                    <span>
                        结算({{ getCheckedGoodsNum }})
                    </span>
                </div>
                <div class="totalPri">
                    <p class="allPri">总价（不含税）：<span>￥{{ getTotalPri.totalPri }}</span></p>
                    <p class="taxPri">预估费税：￥{{ getTotalPri.taxPri }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
// import { scroll } from 'utils/scroll'
import BScroll from 'better-scroll'

import { scroll } from 'utils/scroll'

import CartList from 'components/common/cart/cartList'

export default {
    data() {
        return {
            num : 1,
        }
    },

    components:{
        CartList
    },

    computed: {
        ...mapGetters('cart', {
            goods: "getCartGoods",
            isCheckedAll : 'isCheckedAll',
            getTotalPri : 'getTotalPri',
            getCheckedGoodsNum: "getCheckedGoodsNum"
        })
    },

    // watch : {
    //     getTotalPri(value) {
    //         console.log(getTotalPri)
    //     }
    // },

    methods: {
        checkAll() {
            this.$store.dispatch('cart/checkAll')
        }
    },

    // created() {
    // //     // console.log(this.$store)
    // //     ...mapState('myCollections', {
    // //         collections: "myCollections"
    // //     })
    //     console.log(this.collections)   
    // },

    mounted() {
        // 页面渲染 好后
        this.$nextTick(() => {
            scroll({
                el: '#cartBox'
            })

        })
    }
}
</script>

<style lang="stylus" scoped>

.payFor
    float right
    .totalPri
        float right
        padding .05rem 0
        p
            text-align right
        .allPri
            font-size .13rem
            color #333
            span 
                color: #e31436;
                font-weight: bold
        .taxPri
            font-size: .11rem;
            color: #999
    .gotoPay
        float right
        background-color: #e31436;
        color: #fff
        height .5rem
        width .90rem
        text-align center
        line-height .5rem
        font-size .16rem
        font-weight 500
        margin-left .15rem

.payForBox
    height .5rem
    width 100%
    background #fff
    position fixed
    left 0
    bottom 0
    border-top .01rem solid #f0f0f0
    .checkAll
        width .6rem
        padding-left .1rem
        line-height .5rem
        float left
        #checkall
            vertical-align middle
            margin-right .05rem
        label
            color #333
            font-size .12rem
            font-weight 700

#cartBox
    height 5.72rem
    background #f0f0f0
    width 100%

.cartTit
    width 100%
    height .45rem
    text-align center
    line-height .45rem
    position relative
    z-index 999
    background #fff
    font-size .18rem
    border-bottom 0.01rem solid #f0f0f0
    .toHome 
        position absolute 
        right .2rem
        top .06rem
        height .32rem
    .back
        position absolute 
        left .2rem
        top .06rem
        height .32rem


.cartBox
    width 100%
    height 100%


</style>


