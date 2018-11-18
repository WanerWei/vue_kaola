<template>
    <div id="dowloadbox" v-if="($route.name != 'signIn') && ($route.name != 'cart') ">
        <div class="m-downloadbanner">
            <img src="https://haitao.nosdn2.127.net/51df370d-4f87-49b0-ad8b-76a58d16cf18.png?imageView&thumbnail=64x0&quality=75" alt="">
            <div>
                <p>下载APP领1000元新人现金礼包</p>
                <p>网易考拉-网易旗下 正品保障</p>
            </div>
            <span>立即打开</span>
        </div>
    </div>

</template>

<script>

export default {

}
</script>

<style lang="stylus" scoped>
#dowloadbox
    width 100%
    height .52rem
    background #fff
    position relative
    z-index 999
    .m-downloadbanner
        height 100%
        padding 0 .1rem
        display flex
        align-items center
        img
            width .32rem
            height .19rem
        div
            margin-left: .23rem;
            padding-top: .09rem;
            width: 60%;
            height: 100%;
            font-size: 13px;
            color: #333;
        span 
            position: absolute;
            right: 10px;
            top: 15px;
            height: 24px;
            padding: 0 9px;
            background: red;
            color: #fff;
            border-radius: 12px;
            font-size: 12px;
            line-height: 24px;


</style>


