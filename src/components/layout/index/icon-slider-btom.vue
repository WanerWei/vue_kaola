<template>
    <article>
        <!-- <a href="javascript:;">
            <img :src="IconSliderBtomC[0]" alt="">
        </a>
        <a href="javascript:;">
            <img :src="IconSliderBtomC[1]" alt="">
        </a> -->
        <a href="javascript:;">
            <img :src="IconSliderBtomC" alt="">
        </a>
    </article>
</template>

<script>
export default {
    props:{
        IconSliderBtomC: String
    }
}
</script>

<style lang="stylus" scoped>
article
    width 100%
    height .82rem
    a
        float left
        width 100%
        height 100%
        overflow hidden
        img
            width 100%
</style>


