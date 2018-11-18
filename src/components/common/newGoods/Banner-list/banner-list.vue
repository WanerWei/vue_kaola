<template>

<div class="swiper-slide">
    <div class="swiper-content">
        <div class="brandCon">
            <div class="banImg">
                <a href="javascript:;">
                    <img :src="item.img" alt="">
                </a>
                <div class="monthNewShelvesNum">
                    <span>{{ item.monthNewShelvesNum }}</span>
                    <p>上新</p>
                </div>
            </div>
            <div class="banDetail">
                <div class="brandImg">
                    <img :src="item.highUrl" alt="">
                </div>
                <div class="banCon">
                    <p class="brandName">{{ item.brandName }}</p>
                    <p class="benefit">{{ item.benefit }}</p>
                    <p class="label1"><span>{{ item.label1 }}</span></p>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
export default {
    props: {
        // 接收父组件绑定的属性
        item: Object
    }
}
</script>

<style lang="stylus" scoped>

.swiper-slide
    width 2.6rem
    height 2.6rem

.swiper-content
    width 100%
    height 100%

.brandCon
    width 2.6rem
    height 2.6rem
    border .01rem solid  #ddd
    border-radius .05rem
    background #fff
    .banImg
        width 100%
        height 1.8rem
        position relative
        .monthNewShelvesNum
            position absolute
            width .44rem
            height .53rem
            background-image: linear-gradient(to top, #f00, #ff446f);
            border-radius .03rem
            right 0
            top .12rem
            text-align center
            color #fff
            padding .05rem 0
            span
                font-size .16rem
        a
            display block
            width 100%
            height 100%
            overflow hidden
            img
                width 100%       
    .banDetail
        width 100%
        height .8rem
        padding .1rem
        .brandImg
            float left
            width .6rem        
            height .6rem
            overflow hidden
            border 0.01rem solid #ddd
            border-radius .05rem
            img
                width 100%
        .banCon
            float left
            width 1.7rem
            height .7rem
            padding-left .1rem
            .brandName
                font-weight: 700;
                color: rgb(51, 51, 51);
                font-size: .18rem;
                line-height: .18rem;
            .benefit
                color: rgb(51, 51, 51);
                font-size: .14rem;
                line-height: .14rem;
                margin .05rem 0 .02rem 0
                width 1.6rem
                overflow hidden               
                text-overflow ellipsis
                display -webkit-box
                -webkit-box-orient vertical 
                -webkit-line-clamp 1


            .label1
                span 
                    color: red;
                    border: 0.01rem solid rgb(255, 30, 50);
                    padding: 0rem 0.05rem;
                    font-size: 0.12rem;
                    border-radius: 0.05rem;
                    height: 0.15rem;
                    line-height: 0.13rem;
</style>


