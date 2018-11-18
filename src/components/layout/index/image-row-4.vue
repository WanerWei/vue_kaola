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
        ImageRowFourC: Array
    },
    computed: {
        imgUrl() {
            return {
                imgUrl1 : this.ImageRowFourC && this.ImageRowFourC[0] || '',
                imgUrl2 : this.ImageRowFourC && this.ImageRowFourC[1] || ''
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.image-row-3
    width 100%
    height .83rem
    a
        display block
        float left
        width 50%
        height 100%
        overflow hidden
        img
            width 100%
</style>