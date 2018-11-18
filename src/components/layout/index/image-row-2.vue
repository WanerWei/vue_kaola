<template>
<article class="image-row-2">
    <a href="javascript:;">
        <img :src="ImageRowTwoC[0]" alt="">
    </a>
    <a href="javascript:;">
        <img :src="ImageRowTwoC[1]" alt="">
    </a>
</article>
</template>

<script>
export default {
    props: {
        ImageRowTwoC: Array
    }
}
</script>

<style lang="stylus" scoped>
.image-row-2
    width 100%
    height 1.26rem
    a
        display block
        float left
        width 50%
        height 100%
        overflow hidden
        img
            width 100%
</style>


