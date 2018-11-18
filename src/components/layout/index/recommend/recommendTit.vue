<template>
    <div class="recommendTit">
        <img :src="recommendTitImg.labelBackgroundImage" alt="">
    </div>
</template>

<script>
export default {
    props: {
        recommendTitImg: [Object,String]
    }
}
</script>

<style lang="stylus" scoped>
.recommendTit
    width 100%
    height .61rem
    overflow hidden
    img 
        width 100%
</style>


