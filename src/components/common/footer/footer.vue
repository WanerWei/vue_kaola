<template>
<footer>
    <div class="footerTop">
        <a href="javascript:;">首页</a>
        <span>|</span>
        <a href="javascript:;">客户端</a>
        <span>|</span>
        <a href="javascript:;">登录</a>
        <span>|</span>
        <a href="javascript:;">注册</a>
    </div>  
    <div class="footerBot">
        <p>网易公司版权所有@1997-2018</p>
    </div>
</footer>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>

footer
    background #fff
    width 100%
    height .85rem
    padding .22rem .15rem
    
    .footerTop
        padding 0 .2rem
        display flex
        justify-content space-around
        a
            font-size .14rem
            color #848689
    .footerBot
        p
            font-size .13rem
            margin-top .05rem
            color #848689
            text-align center
</style>


