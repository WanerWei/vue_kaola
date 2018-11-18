<template>
<article class="image-row-3">
    <a href="javascript:;">
        <img :src="imgUrl.imgUrl1" alt="">
    </a>
    <a href="javascript:;">
        <img :src="imgUrl.imgUrl2" alt="">
    </a>
</article>
</template>

<script>
export default {
    props: {
        ImageRowFiveC: Array
    },
    computed: {
        imgUrl() {
            return {
                imgUrl1 : this.ImageRowFiveC && this.ImageRowFiveC[0] || '',
                imgUrl2 : this.ImageRowFiveC && this.ImageRowFiveC[1] || ''
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.image-row-3
    width 100%
    height .94rem
    a
        display block
        float left
        width 50%
        height 100%
        overflow hidden
        img
            width 100%
</style>