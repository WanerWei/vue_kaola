<template>
    <div class="banner">
        <ul>
            <div class="swiper-container" id="swiper-container1">
                <div class="swiper-wrapper">
                    <banner-list :item="item" v-for="item in bannerListItem" :key="item.biMark"></banner-list>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>

import bannerList from 'components/common/index/indexBanner/banner-list'

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
    props : {
        bannerListItem : Array
    },

    components: {
        bannerList
    },

    mounted() { 

    }   
}

</script>

<style lang="stylus" scoped>
.banner
    width 100%
    height 1.875rem
.swiper-container
    width 100%
    height 100%
    overflow hidden
    

</style>

