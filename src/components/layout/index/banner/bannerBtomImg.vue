<template>
    <div class="swiper-slide">
        <!-- <router-link to="/newGoods" tag="div" active-class="active"> -->
        <div @click="$router.push({ path: '/newGoods/choiceness'})">
            <img :src="bannerBtomImg" alt="">
        </div>
        <!-- </router-link> -->
    </div>
</template>

<script>
export default {
    props: {
        bannerBtomImg: String
    }
}
</script>

<style lang="stylus" scoped>
.swiper-slide
    width: 100%;
    height: 100%
    img
        width 100%
</style>


