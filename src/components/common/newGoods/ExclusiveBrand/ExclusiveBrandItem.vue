<template>
    <div class="brandGoodImg">
        <img :src="item.imageUrl" alt="">
    </div>
</template>

<script>
export default {
    props : {
        item: Object
    }
}
</script>

<style lang="stylus" scoped>
.brandGoodImg
    width .9rem
    height .9rem
    overflow hidden
    float left
    margin-right .05rem
    img 
        width 100%
</style>


