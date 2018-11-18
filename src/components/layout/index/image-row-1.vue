<template>
    <article class="image-row-1">
        <section class="left">
            <a href="javascript:;">
                <img :src="imageSrc.imgSrc1" alt="">
            </a>
        </section>
        <section class="right">
            <a href="javascript:;">
                <img :src="imageSrc.imgSrc2" alt="">
            </a>
            <a href="javascript:;">
                <img :src="imageSrc.imgSrc3" alt="">
            </a>
        </section>
    </article>
</template>

<script>
export default {
    props: {
        ImageRowOneC : Array
    },

    computed: {
        imageSrc() {
            return {
                imgSrc1 : this.ImageRowOneC[0] && this.ImageRowOneC[0].imageUrl || '',
                imgSrc2 : this.ImageRowOneC[1] && this.ImageRowOneC[1].imageUrl || '',
                imgSrc3 : this.ImageRowOneC[2] && this.ImageRowOneC[2].imageUrl || '',
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.image-row-1
    width 100%
    height 1.875rem
    section
        float left
        height 100%
        width 50%
        overflow hidden
        a
            display block
            width 100%
            height 100%
            img
                width 100%
    .right
        a
            height 50% 

</style>


