<template>

<div class="swiper-slide">
<!-- <mt-swipe-item> -->
    <li>
        <a href="javascript:;">
            <img :src="item.imgUrl" alt="">
        </a>
    </li>
<!-- </mt-swipe-item> -->
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
li
    width 100%
    height 100%
    a
        display block
        width 100%
        height 100%
        overflow hidden
        img
            width 100%       
</style>


