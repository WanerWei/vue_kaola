<template>
    <li>
        <a href="javasctipt:;">
            
            <div v-if="item">
                <div class="imgContainer">
                    <img :src="calculate.imgSrc" alt="">
                </div>
                <p class="subTitle1">{{ title }}</p>
                <p class="tag" v-if="calculate.tag"><span>{{ calculate.tag }}</span></p>
                <p class="emptyTag" v-else></p>
                <p class="price">￥{{ currentPrice }}<del class="price-origin">￥{{ originalPrice }}</del></p>
            </div>
            <div  v-if="!item">
                <div class="imgContainer">
                    <img :src="imgUrl" alt="">
                </div>
                <p class="descriptionOne">{{ descriptionOne }}</p>
                <p class="descriptionTwo">{{ descriptionTwo }}</p>
            </div>
        </a>
    </li>
</template>

<script>
export default {
    props: {
        item: Array,
        currentPrice: Number,
        originalPrice: Number,
        benefitPointList: Array,
        title: String,
        descriptionOne: String,
        descriptionTwo: String,
        imgUrl: String
    },
    computed: {
        calculate() {
            return {
                imgSrc : this.item && this.item[0] || '',
                tag: this.benefitPointList && this.benefitPointList[0] || ''
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/ellipsis.styl'

li
    width 1.06rem
    // height 1.84rem
    height auto
    float left
    border: 1px solid #ececec
    border-right none
    a
        display block
        width 1.06rem
        height 100%
        .imgContainer
            width 1.06rem
            height 1.05rem
            overflow hidden
            border-bottom: 1px solid #ececec
            margin-bottom .08rem
            img
                width 100%
        .subTitle1
            ellipsis 100% 2
            font-size: .12rem;
            line-height: .14rem;
            padding-left: .05rem;
            color: #333;
        .tag
            width 100%
            height .2rem
            padding-left .05rem
            span
                padding 0 .04rem
                line-height .20rem
                border .01rem solid #e31436
                color red
                font-size: .12rem
                border-radius .1rem
        .emptyTag
            width 100%
            height .2rem
        .price
            padding-left: .05rem;
            width: 100%;
            color: red;
            font-size: .14rem;
            font-weight: 700;
            del
                margin-left: .03rem;
                color: #999;
                font-size: .12rem;
                font-weight: 400;
                text-decoration: line-through
        .descriptionOne
            color #333
            font-size .14rem
            ellipsis 100% 1
            text-align center
            padding 0 .05rem
        .descriptionTwo
            text-align center
            color #666
            font-size .12rem
            ellipsis 100% 1
            margin-bottom .08rem
        
</style>



