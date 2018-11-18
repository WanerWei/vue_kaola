<template>
<li>
    <div>
        <a href="javascript:;">
            <img :src="item.imgUrl" alt="">
        </a>
    </div>

</li>
</template>

<script>
export default {
    props : {
        item: Object
    }
}
</script>

<style lang="stylus" scoped>
div
    float left
    width 20%
    height .86rem
    a
        display block
        width 100%
        height 100%
        overflow hidden
        img
            width 100%


</style>


